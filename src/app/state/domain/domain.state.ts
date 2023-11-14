import {Action, Selector, State, StateContext} from '@ngxs/store';
import {
  AddMealAction,
  ConfigureProfileAction,
  CookADishAddIngredient,
  CookADishRemoveIngredient,
  CreateDishAction,
  CreateFoodAction,
  CreateFoodFailedEvent,
  DeleteDishAction,
  DeleteFoodAction,
  DeleteFoodFailedEvent,
  DishCreatedEvent,
  DishCreationFailedEvent,
  DishDeletedEvent,
  DishDeletionFailedEvent,
  EditFoodAction,
  FoodCreatedEvent,
  FoodDeletedEvent,
  FoodsListLoadedEvent,
  FoodsListLoadingFailedEvent,
  FoodUpdatedEvent,
  ICookADishFormModel,
  IDomainState,
  InitiateCookADishForm,
  LoadDishAction,
  LoadFoodsListAction,
  LoadMealsListAction,
  LoadMoreFoodsAction,
  LoadMoreMealsAction,
  MealAddedSuccessfullyEvent,
  MealAddingFailedEvent,
  MealRemovedSuccessfullyEvent,
  MealRemovingFailedEvent,
  MealsListLoadedEvent,
  MealsListLoadingFailedEvent,
  MoreFoodsLoadedEvent,
  MoreFoodsLoadingFailedEvent,
  MoreMealsLoadedEvent,
  MoreMealsLoadingFailedEvent,
  ProfileConfigurationFailedEvent,
  ProfileConfiguredSuccessfullyEvent,
  ProfileLoadedEvent,
  RemoveMealAction,
  UpdateFoodFailedEvent,
} from './domain.state-models';
import {Injectable} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {catchError, firstValueFrom, map, of, tap} from 'rxjs';
import {IDish, IFood, IMeal, IProfile} from '../../commons/models/domain.models';
import {emptyPfcc, IPfcc} from '../../commons/models/common.models';
import {isOnCurrentWeek, isToday, sumPfccs} from '../../commons/functions';
import {DateTime} from 'luxon';
import {ResetForm, UpdateFormValue} from "@ngxs/form-plugin";
import {IFormState} from "../form/form.commons";

export const DOMAIN_STATE_NAME = 'domain';

@State<IDomainState>({
  name: DOMAIN_STATE_NAME,
  defaults: {
    profile: null,
    dishes: [],
    foods: null,
    meals: null,
    forms: {
      cookADish: {
        model: {
          name: null,
          cookedWeight: 0,
          ingredients: [],
        },
        dirty: false,
        status: 'PENDING',
        errors: {},
      },
    },
  },
})
@Injectable()
export class DomainState {

  constructor(private api: ApiService) {
  }

  @Selector()
  static profile(state: IDomainState): IProfile {
    return state.profile;
  }

  @Selector()
  static dishes(state: IDomainState): IDish[] {
    return state.dishes;
  }

  @Selector()
  static foods(state: IDomainState): IFood[] {
    return state.foods.data;
  }

  @Selector()
  static moreFoodsAvailable(state: IDomainState): boolean {
    const {page, totalPages} = state.foods;
    return page != null && totalPages != null && page < (totalPages - 1);
  }

  @Selector()
  static meals(state: IDomainState): IMeal[] {
    return state.meals.data;
  }

  @Selector()
  static todayNutrients(state: IDomainState): IPfcc {
    if (state.meals == null) {
      return emptyPfcc;
    }
    const eaten = state.meals.data
      .filter(m => isToday(m.eatenOn))
      .map(m => m.pfcc);

    return sumPfccs(...eaten);
  }

  @Selector()
  static cookADishForm(state: IDomainState): IFormState<ICookADishFormModel> {
    return state.forms.cookADish;
  }

  @Selector()
  static cookADishUsedIngredients(state: IDomainState): IFood[] {
    return (state.forms.cookADish.model?.ingredients || [])
      .map(i => i.ingredient)
      .filter(i => i != null);
  }

  @Selector()
  static weeklyNutrients(state: IDomainState): IPfcc {
    if (state.meals == null) {
      return emptyPfcc;
    }
    const eaten = state.meals.data
      .filter(m => isOnCurrentWeek(m.eatenOn))
      .map(m => m.pfcc);

    return sumPfccs(...eaten);
  }

  @Selector()
  static todayMeals(state: IDomainState): IMeal[] {
    if (state.meals == null) {
      return [];
    }
    return state.meals.data
      .filter(m => isToday(m.eatenOn));
  }

  @Action(ProfileLoadedEvent)
  handleSuccessfulSignIn(ctx: StateContext<IDomainState>, action: ProfileLoadedEvent) {
    ctx.patchState({
      profile: {
        ...action.profile,
      },
    });
  }

  @Action(DeleteDishAction)
  handleDeleteDishAction(ctx: StateContext<IDomainState>, action: DeleteDishAction) {
    return this.api.deleteDish(action.dishId)
      .pipe(
        map(_ => new DishDeletedEvent(action.dishId)),
        catchError(err => of(new DishDeletionFailedEvent(action.dishId, err.message))),
        map(ctx.dispatch),
      );
  }

  @Action(DishDeletedEvent)
  handleDishDeletedEvent(ctx: StateContext<IDomainState>, action: DishDeletedEvent) {
    ctx.patchState({
      dishes: ctx.getState().dishes.map(d => {
        if (d.id !== action.dishId) {
          return d;
        } else {
          return {
            ...d,
            deleted: true,
          };
        }
      }),
    });
  }

  @Action(DishDeletionFailedEvent)
  handleDishDeletionFailedEvent(ctx: StateContext<IDomainState>, action: DishDeletionFailedEvent) {
    console.warn(`Failed to delete dish#${action.dishId}: ${action.msg}`);
  }

  @Action(ConfigureProfileAction)
  configureProfile(ctx: StateContext<IDomainState>, action: ConfigureProfileAction) {
    return this.api.configureProfile(action.aims)
      .pipe(
        map(_ => new ProfileConfiguredSuccessfullyEvent(action.aims)),
        catchError(err => of(new ProfileConfigurationFailedEvent(err.message))),
        map(ctx.dispatch),
      );
  }

  @Action(ProfileConfiguredSuccessfullyEvent)
  handleProfileConfiguredSuccessfullyEvent(ctx: StateContext<IDomainState>, action: ProfileConfiguredSuccessfullyEvent) {
    const profile = ctx.getState().profile as IProfile;
    ctx.patchState({
      profile: {
        ...profile,
        profileConfigured: true,
        aims: action.aims,
      },
    });
  }

  @Action(ProfileConfigurationFailedEvent)
  handleProfileConfiguringFailed(ctx: StateContext<IDomainState>, action: ProfileConfigurationFailedEvent) {
    ctx.patchState({
      profile: {
        ...ctx.getState().profile as IProfile,
        profileConfigured: false,
        aims: emptyPfcc,
      },
    });
  }

  @Action(RemoveMealAction)
  handleRemoveMealAction(ctx: StateContext<IDomainState>, action: RemoveMealAction) {
    return this.api.removeMeal(action.mealId).pipe(
      map(_ => new MealRemovedSuccessfullyEvent(action.mealId)),
      catchError(err => of(new MealRemovingFailedEvent(action.mealId, err.message))),
      map(ctx.dispatch),
    );
  }

  @Action(MealRemovedSuccessfullyEvent)
  handleMealRemovedEvent(ctx: StateContext<IDomainState>, action: MealRemovedSuccessfullyEvent) {
    const oldMeals = ctx.getState().meals;
    ctx.patchState({
      meals: {
        ...oldMeals,
        data: oldMeals.data.filter(m => m.id !== action.mealId),
      },
    });
  }

  @Action(MealRemovingFailedEvent)
  handleMealRemovingFailed(ctx: StateContext<IDomainState>, action: MealRemovingFailedEvent) {
    console.error(`Failed to remove meal, reason: ${action.msg}`);
  }

  @Action(LoadMealsListAction)
  handleLoadMealsListAction(ctx: StateContext<IDomainState>, action: LoadMealsListAction) {
    return this.api.loadMeals(action.page, action.pageSize, action.from, action.to)
      .pipe(
        map(res => new MealsListLoadedEvent(res)),
        catchError(err => of(new MealsListLoadingFailedEvent(err?.message))),
        map(ctx.dispatch),
      );

  }

  @Action(MealsListLoadedEvent)
  handleMealsListLoadedEvent(ctx: StateContext<IDomainState>, action: MealsListLoadedEvent) {
    ctx.patchState({
      meals: {
        ...ctx.getState().meals,
        ...action.meals,
      },
    });
  }

  @Action(MealsListLoadingFailedEvent)
  handleMealsListLoadingFailedEvent(ctx: StateContext<IDomainState>, action: MealsListLoadingFailedEvent) {
    console.error(action.msg);
  }

  @Action(LoadMoreMealsAction)
  handleLoadMoreMealsAction(ctx: StateContext<IDomainState>, action: LoadMoreMealsAction) {
    const {page, pageSize, from, to} = ctx.getState().meals;

    return this.api.loadMeals(page + 1, pageSize, from, to)
      .pipe(
        map(page => new MoreMealsLoadedEvent(page)),
        catchError(err => of(new MoreMealsLoadingFailedEvent(err.message))),
        map(ctx.dispatch),
      );
  }

  @Action(MoreMealsLoadedEvent)
  handleMoreMealsLoadedEvent(ctx: StateContext<IDomainState>, action: MoreMealsLoadedEvent) {
    const prev = ctx.getState().meals;
    ctx.patchState({
      meals: {
        ...prev,
        ...action.meals,
        data: [...prev.data, ...action.meals.data],
      },
    });
  }

  @Action(MoreMealsLoadingFailedEvent)
  handleMoreMealsLoadingFailedEvent(ctx: StateContext<IDomainState>, action: MoreMealsLoadingFailedEvent) {
    console.error(action.msg);
  }

  @Action(CreateDishAction)
  handleCreateDishAction(ctx: StateContext<IDomainState>, action: CreateDishAction) {
    return this.api.addDish(action.dish).pipe(
      map(rsp => new DishCreatedEvent(rsp)),
      catchError(err => of(new DishCreationFailedEvent(err.message))),
      map(ctx.dispatch),
    );
  }

  @Action(DishCreationFailedEvent)
  handleDishCreationFailedEvent(ctx: StateContext<IDomainState>, action: DishCreationFailedEvent) {
    console.log(`Failed to create a dish: ${action.msg}`);
  }

  @Action(DishCreatedEvent)
  handleDishCreatedEvent(ctx: StateContext<IDomainState>, action: DishCreatedEvent) {
    ctx.patchState({
      dishes: [
        ...ctx.getState().dishes,
        action.dish,
      ],
    });
  }

  @Action(AddMealAction)
  handleAddMealAction(ctx: StateContext<IDomainState>, action: AddMealAction) {
    return this.api.addMeal(action.meal).pipe(
      map(rsp => new MealAddedSuccessfullyEvent(rsp)),
      catchError(err => of(new MealAddingFailedEvent(action.meal, err.message))),
      map(ctx.dispatch),
    );
  }

  @Action(MealAddedSuccessfullyEvent)
  handleMealAddedSuccessfullyEvent(ctx: StateContext<IDomainState>, action: MealAddedSuccessfullyEvent) {
    const meal = action.meal;
    meal.eatenOn = DateTime.fromISO(meal.eatenOn as unknown as string);
    const oldMeals = ctx.getState().meals;
    ctx.patchState({
      meals: {
        ...oldMeals,
        data: [...oldMeals.data, meal],
      },
    });
  }

  @Action(MealAddingFailedEvent)
  handleMealAddingFailedEvent(ctx: StateContext<IDomainState>, action: MealAddingFailedEvent) {
    console.error(action.msg);
  }

  @Action(InitiateCookADishForm)
  async handleInitiateCookADishForm(ctx: StateContext<IDomainState>, action: InitiateCookADishForm) {
    const foods = ctx.getState().foods;

    const recipe = await firstValueFrom(this.api.loadFood(action.recipeId));

    if (recipe == null) {
      console.warn(`Can't find recipe with provided id == ${action.recipeId}`);
      return;
    }

    const formIngredients = [];

    for (let index = 0; index < (recipe.ingredients ?? []).length; index++) {
      const i = (recipe.ingredients ?? [])[index];
      formIngredients.push({
        ingredient: foods.data.find(f => f.id === i.id) ??
          await firstValueFrom(this.api.loadFood(i.id)),
        ingredientWeight: i.ingredientWeight,
        index,
      });
    }

    ctx.dispatch(new ResetForm({
      path: `${DOMAIN_STATE_NAME}.forms.cookADish`,
      value: {
        name: `${recipe.name} ${DateTime.now().toFormat("dd.MM")}`,
        ingredients: formIngredients,
        cookedWeight: recipe.ingredients
          ?.map(i => i.ingredientWeight)
          .reduce((w1, w2) => w1 + w2, 0) || 0,
      },
    }));
  }

  @Action(CookADishAddIngredient)
  handleCookADishAddIngredient(ctx: StateContext<IDomainState>, action: CookADishAddIngredient) {
    ctx.dispatch(new UpdateFormValue({
      path: `${DOMAIN_STATE_NAME}.forms.cookADish`,
      propertyPath: `ingredients.${ctx.getState().forms.cookADish?.model?.ingredients?.length || 0}`,
      value: action.ingredient,
    }));
  }

  @Action(CookADishRemoveIngredient)
  handleCookADishRemoveIngredient(ctx: StateContext<IDomainState>, action: CookADishRemoveIngredient) {
    const ingredients = ctx.getState().forms.cookADish?.model?.ingredients;
    const idx = action.idx;
    if (ingredients == null || ingredients.length <= 0 || idx >= ingredients.length) {
      return;
    }


    ctx.dispatch(new UpdateFormValue({
      path: `${DOMAIN_STATE_NAME}.forms.cookADish`,
      propertyPath: 'ingredients',
      value: [
        ...ingredients?.slice(0, idx),
        ...ingredients?.slice(idx + 1, ingredients?.length),
      ],
    }));
  }

  @Action(LoadFoodsListAction)
  handleLoadFoodsListAction(ctx: StateContext<IDomainState>, action: LoadFoodsListAction) {
    return this.api.loadFoodsList(0, action.pageSize, action.name, action.foodType)
      .pipe(
        tap(_ => ctx.patchState({
          foods: {
            ...ctx.getState().foods,
            name: action.name,
            type: action.foodType,
          },
        })),
        map(foods => new FoodsListLoadedEvent(foods)),
        catchError(err => of(new FoodsListLoadingFailedEvent(err.message))),
        map(ctx.dispatch),
      );
  }

  @Action(FoodsListLoadedEvent)
  handleFoodsListLoadedEvent(ctx: StateContext<IDomainState>, action: FoodsListLoadedEvent) {
    ctx.patchState({
      foods: {
        ...ctx.getState().foods,
        ...action.foods,
      },
    });

  }

  @Action(FoodsListLoadingFailedEvent)
  handleFoodsListLoadingFailedEvent(ctx: StateContext<IDomainState>, action: FoodsListLoadingFailedEvent) {
    console.warn(action.msg);
  }

  @Action(LoadMoreFoodsAction)
  handleLoadMoreFoodsAction(ctx: StateContext<IDomainState>, action: LoadMoreFoodsAction) {
    const {page, pageSize, name, type} = ctx.getState().foods;

    return this.api.loadFoodsList(page + 1, pageSize, name, type)
      .pipe(
        map(foods => new MoreFoodsLoadedEvent(foods)),
        catchError(err => of(new MoreFoodsLoadingFailedEvent(err.message))),
        map(ctx.dispatch),
      );
  }

  @Action(MoreFoodsLoadedEvent)
  handleMoreFoodsLoadedEvent(ctx: StateContext<IDomainState>, action: MoreFoodsLoadedEvent) {
    const prev = ctx.getState().foods;
    ctx.patchState({
      foods: {
        ...prev,
        ...action.foods,
        data: [...prev.data, ...action.foods.data],
      },
    });

  }

  @Action(MoreFoodsLoadingFailedEvent)
  handleMoreFoodsLoadingFailedEvent(ctx: StateContext<IDomainState>, action: MoreFoodsLoadingFailedEvent) {
    console.warn(action.msg);
  }

  @Action(CreateFoodAction)
  handleCreateFoodAction(ctx: StateContext<IDomainState>, action: CreateFoodAction) {
    return this.api.addFood({
      ...action.food,
      ownedByUser: true,
    }).pipe(
      map(food => new FoodCreatedEvent(food)),
      catchError(err => of(new CreateFoodFailedEvent(err.message))),
      map(ctx.dispatch),
    );
  }

  @Action(FoodCreatedEvent)
  handleFoodCreatedEvent(ctx: StateContext<IDomainState>, action: FoodCreatedEvent) {
    const {pageSize, name, type} = ctx.getState().foods;
    return ctx.dispatch(new LoadFoodsListAction(pageSize, name, type));
  }

  @Action(CreateFoodFailedEvent)
  handleCreateFoodFailedEvent(ctx: StateContext<IDomainState>, action: CreateFoodFailedEvent) {
    console.warn(action.msg);
  }

  @Action(EditFoodAction)
  handleEditFoodAction(ctx: StateContext<IDomainState>, action: EditFoodAction) {
    return this.api.updateFood({
      ...action.food,
    }).pipe(
      map(food => new FoodUpdatedEvent(food, action.food.id)),
      catchError(err => of(new UpdateFoodFailedEvent(err.message))),
      map(ctx.dispatch),
    );
  }

  @Action(FoodUpdatedEvent)
  handleFoodUpdatedEvent(ctx: StateContext<IDomainState>, action: FoodUpdatedEvent) {
    ctx.patchState({
      foods: {
        ...ctx.getState().foods,
        data: [
          ...ctx.getState().foods?.data?.map(f => f.id === action.originalFoodId ? action.newFood : f),
        ],
      },
    });
  }

  @Action(UpdateFoodFailedEvent)
  handleUpdateFoodFailedEvent(ctx: StateContext<IDomainState>, action: UpdateFoodFailedEvent) {
    console.warn(action.msg);
  }

  @Action(DeleteFoodAction)
  handleDeleteFoodAction(ctx: StateContext<IDomainState>, action: DeleteFoodAction) {
    return this.api.deleteFood(action.id).pipe(
      map(() => new FoodDeletedEvent(action.id)),
      catchError(err => of(new DeleteFoodFailedEvent(err.message))),
      map(ctx.dispatch),
    );
  }

  @Action(FoodDeletedEvent)
  handleFoodDeletedEvent(ctx: StateContext<IDomainState>, action: FoodDeletedEvent) {
    const oldFoods = ctx.getState().foods;
    ctx.patchState({
      foods: {
        ...oldFoods,
        page: oldFoods.page - 1,
      },
    });
    return ctx.dispatch(new LoadMoreFoodsAction());
  }

  @Action(DeleteFoodFailedEvent)
  handleDeleteFoodFailedEvent(ctx: StateContext<IDomainState>, action: DeleteFoodFailedEvent) {
    console.warn(action.msg);
  }

  @Action(LoadDishAction)
  handleLoadDishAction(ctx: StateContext<IDomainState>, action: LoadDishAction) {
    this.api.loadDish(action.dishId);
  }
}
