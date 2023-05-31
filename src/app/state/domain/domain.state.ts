import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {
  AddMealAction,
  ConfigureProfileAction,
  CookADishAddIngredient,
  CookADishRemoveIngredient,
  CreateDishAction,
  CreateFoodAction,
  CreateFoodFailedEvent,
  DeleteDishAction, DeleteFoodAction, DeleteFoodFailedEvent,
  DishCreatedEvent,
  DishCreationFailedEvent,
  DishDeletedEvent,
  DishDeletionFailedEvent,
  EditFoodAction,
  FoodCreatedEvent, FoodDeletedEvent,
  FoodUpdatedEvent,
  ICookADishFormModel,
  IDomainState,
  InitiateCookADishForm,
  MealAddedSuccessfullyEvent,
  MealAddingFailedEvent,
  MealRemovedSuccessfullyEvent,
  MealRemovingFailedEvent,
  ProfileConfigurationFailedEvent,
  ProfileConfiguredSuccessfullyEvent,
  ProfileLoadedEvent,
  RemoveMealAction,
  UpdateFoodFailedEvent,
} from './domain.state-models';
import {Injectable} from '@angular/core';
import {ProfileService} from '../../service/profile.service';
import {catchError, map, of} from 'rxjs';
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
    foods: [],
    meals: [],
    forms: {
      cookADish: {
        model: {
          name: null,
          cookedWeight: 0,
          ingredients: []
        },
        dirty: false,
        status: 'PENDING',
        errors: {}
      }
    }
  },
})
@Injectable()
export class DomainState {

  constructor(private service: ProfileService) {
  }

  @Selector()
  static ingredientFoods(state: IDomainState): IFood[] {
    return state.foods.filter(f => f.type === 'ingredient');
  }

  @Selector()
  static recipeFoods(state: IDomainState): IFood[] {
    return state.foods.filter(f => f.type === 'recipe');
  }

  @Selector()
  static profile(state: IDomainState) {
    return state.profile;
  }

  @Selector()
  static dishes(state: IDomainState) {
    return state.dishes;
  }

  @Selector()
  static foods(state: IDomainState) {
    return state.foods;
  }

  @Selector()
  static meals(state: IDomainState) {
    return state.meals;
  }

  @Selector()
  static foodsMap(state: IDomainState): Map<number, IFood> {
    const result = new Map<number, IFood>();
    state.foods.forEach(f => result.set(f.id, f));
    return result;
  }

  @Selector()
  static dishesMap(state: IDomainState): Map<number, IDish> {
    const result = new Map<number, IDish>();
    state.dishes.forEach(d => result.set(d.id, d));
    return result;
  }

  @Selector()
  static todayNutrients(state: IDomainState): IPfcc {
    const eaten = state.meals
      .filter(m => isToday(m.eatenOn))
      .map(m => m.pfcc);

    if (state.profile?.base != null) {
      eaten.push(state.profile?.base);
    }

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
    const eaten = state.meals
      .filter(m => isOnCurrentWeek(m.eatenOn))
      .map(m => m.pfcc);

    if (state.profile?.base != null) {
      for (let i = 0; i <= DateTime.now().weekday; i++) {
        eaten.push(state.profile?.base);
      }
    }

    return sumPfccs(...eaten);
  }

  @Selector()
  static todayMeals(state: IDomainState): IMeal[] {
    return state.meals
      .filter(m => isToday(m.eatenOn));
  }

  static food(id: number) {
    return createSelector([DomainState], (state: IDomainState) => {
      return state.foods.find(f => f.id === id) || null;
    });
  }

  @Action(ProfileLoadedEvent)
  handleSuccessfulSignIn(ctx: StateContext<IDomainState>, action: ProfileLoadedEvent) {
    ctx.patchState({
      profile: {
        ...action.profile,
      },
      meals: action.profile.meals,
      dishes: action.profile.dishes,
      foods: action.profile.foods,
    });
  }

  @Action(DeleteDishAction)
  handleDeleteDishAction(ctx: StateContext<IDomainState>, action: DeleteDishAction) {
    return this.service.deleteDish(action.dishId)
      .pipe(
        map(_ => new DishDeletedEvent(action.dishId)),
        catchError(err => of(new DishDeletionFailedEvent(action.dishId, err.message))),
        map(ctx.dispatch)
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
            deleted: true
          }
        }
      })
    });
  }

  @Action(DishDeletionFailedEvent)
  handleDishDeletionFailedEvent(ctx: StateContext<IDomainState>, action: DishDeletionFailedEvent) {
    console.warn(`Failed to delete dish#${action.dishId}: ${action.msg}`);
  }

  @Action(ConfigureProfileAction)
  configureProfile(ctx: StateContext<IDomainState>, action: ConfigureProfileAction) {
    return this.service.configureProfile(action.aims, action.base || null)
      .pipe(
        map(_ => new ProfileConfiguredSuccessfullyEvent(action.aims, action.base || null)),
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
        base: action.base,
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
        base: null,
      },
    });
  }

  @Action(RemoveMealAction)
  handleRemoveMealAction(ctx: StateContext<IDomainState>, action: RemoveMealAction) {
    return this.service.removeMeal(action.mealId).pipe(
      map(_ => new MealRemovedSuccessfullyEvent(action.mealId)),
      catchError(err => of(new MealRemovingFailedEvent(action.mealId, err.message))),
      map(ctx.dispatch),
    );
  }

  @Action(MealRemovedSuccessfullyEvent)
  handleMealRemovedEvent(ctx: StateContext<IDomainState>, action: MealRemovedSuccessfullyEvent) {
    ctx.patchState({
      meals: ctx.getState().meals.filter(m => m.id !== action.mealId),
    });
  }

  @Action(MealRemovingFailedEvent)
  handleMealRemovingFailed(ctx: StateContext<IDomainState>, action: MealRemovingFailedEvent) {
    console.error(`Failed to remove meal, reason: ${action.msg}`);
  }

  @Action(CreateDishAction)
  handleCreateDishAction(ctx: StateContext<IDomainState>, action: CreateDishAction) {
    return this.service.addDish(action.dish).pipe(
      map(rsp => new DishCreatedEvent(rsp.dish)),
      catchError(err => of(new DishCreationFailedEvent(err.message))),
      map(ctx.dispatch)
    )
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
        action.dish
      ]
    })
  }

  @Action(AddMealAction)
  handleAddMealAction(ctx: StateContext<IDomainState>, action: AddMealAction) {
    return this.service.addMeal(action.meal).pipe(
      map(rsp => new MealAddedSuccessfullyEvent(rsp.meal)),
      catchError(err => of(new MealAddingFailedEvent(action.meal, err.message))),
      map(ctx.dispatch)
    );
  }

  @Action(MealAddedSuccessfullyEvent)
  handleMealAddedSuccessfullyEvent(ctx: StateContext<IDomainState>, action: MealAddedSuccessfullyEvent) {
    ctx.patchState({
      meals: [
        ...ctx.getState().meals,
        action.meal
      ]
    });
  }

  @Action(MealAddingFailedEvent)
  handleMealAddingFailedEvent(ctx: StateContext<IDomainState>, action: MealAddingFailedEvent) {
    console.error(action.msg);
  }

  @Action(InitiateCookADishForm)
  handleInitiateCookADishForm(ctx: StateContext<IDomainState>, action: InitiateCookADishForm) {
    const foods = ctx.getState().foods;

    const recipe = foods.find(f => f.type === 'recipe' && f.id === action.recipeId);

    if (recipe == null) {
      console.warn(`Can't find recipe with provided id == ${action.recipeId}`);
      return;
    }

    const formIngredients = (recipe.consistOf || []).map((i, index) => {
      return {
        ingredient: foods.find(f => f.id === i.id),
        ingredientWeight: i.ingredientWeight,
        index
      };
    });

    ctx.dispatch(new ResetForm({
      path: `${DOMAIN_STATE_NAME}.forms.cookADish`,
      value: {
        name: `${recipe.name} ${DateTime.now().toFormat("dd.MM")}`,
        ingredients: formIngredients,
        cookedWeight: recipe.consistOf
          ?.map(i => i.ingredientWeight)
          .reduce((w1, w2) => w1 + w2, 0) || 0
      }
    }));
  }

  @Action(CookADishAddIngredient)
  handleCookADishAddIngredient(ctx: StateContext<IDomainState>, action: CookADishAddIngredient) {
    ctx.dispatch(new UpdateFormValue({
      path: `${DOMAIN_STATE_NAME}.forms.cookADish`,
      propertyPath: `ingredients.${ctx.getState().forms.cookADish?.model?.ingredients?.length || 0}`,
      value: action.ingredient
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
        ...ingredients?.slice(idx + 1, ingredients?.length)
      ]
    }));
  }

  @Action(CreateFoodAction)
  handleCreateFoodAction(ctx: StateContext<IDomainState>, action: CreateFoodAction) {
    return this.service.addFood({
      ...action.food,
      ownedByUser: true
    }).pipe(
      map(food => new FoodCreatedEvent(food)),
      catchError(err => of(new CreateFoodFailedEvent(err.message))),
      map(ctx.dispatch)
    )
  }

  @Action(FoodCreatedEvent)
  handleFoodCreatedEvent(ctx: StateContext<IDomainState>, action: FoodCreatedEvent) {
    ctx.patchState({
      foods: [
        ...ctx.getState().foods,
        action.food
      ]
    })
  }

  @Action(CreateFoodFailedEvent)
  handleCreateFoodFailedEvent(ctx: StateContext<IDomainState>, action: CreateFoodFailedEvent) {
    console.warn(action.msg);
  }

  @Action(EditFoodAction)
  handleEditFoodAction(ctx: StateContext<IDomainState>, action: EditFoodAction) {
    return this.service.updateFood({
      ...action.food
    }).pipe(
      map(food => new FoodUpdatedEvent(food, action.food.id)),
      catchError(err => of(new UpdateFoodFailedEvent(err.message))),
      map(ctx.dispatch)
    )
  }

  @Action(FoodUpdatedEvent)
  handleFoodUpdatedEvent(ctx: StateContext<IDomainState>, action: FoodUpdatedEvent) {
    ctx.patchState({
      foods: [
        ...ctx.getState().foods.map(f => f.id === action.originalFoodId ? action.newFood : f)
      ]
    })
  }

  @Action(UpdateFoodFailedEvent)
  handleUpdateFoodFailedEvent(ctx: StateContext<IDomainState>, action: UpdateFoodFailedEvent) {
    console.warn(action.msg);
  }

  @Action(DeleteFoodAction)
  handleDeleteFoodAction(ctx: StateContext<IDomainState>, action: DeleteFoodAction) {
    return this.service.deleteFood(action.id).pipe(
      map(id => new FoodDeletedEvent(id)),
      catchError(err => of(new DeleteFoodFailedEvent(err.message))),
      map(ctx.dispatch)
    )
  }

  @Action(FoodUpdatedEvent)
  handleFoodDeletedEvent(ctx: StateContext<IDomainState>, action: FoodDeletedEvent) {
    ctx.patchState({
      foods: [
        ...ctx.getState().foods.filter(f => f.id !== action.id)
      ]
    })
  }

  @Action(DeleteFoodFailedEvent)
  handleDeleteFoodFailedEvent(ctx: StateContext<IDomainState>, action: DeleteFoodFailedEvent) {
    console.warn(action.msg);
  }
}
