import {
  FoodType,
  IDish,
  IDishToCreate,
  IFood,
  IMeal,
  IProfile,
  IProfileStatistics,
} from '../../commons/models/domain.models';
import {IPage, IPfcc} from '../../commons/models/common.models';
import {IFormState} from "../form/form.commons";

export interface ICookADishFormModel {
  name: string | null;
  ingredients: {
    ingredient: IFood,
    ingredientWeight: number,
    index: number
  }[];
  cookedWeight: number;
}

export interface IDomainState {
  profile: IProfile | null;
  foods: {
    data: IFood[];
    page: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;

    name: string;
    type: FoodType;
  };
  meals: IMeal[];
  dishes: IDish[];
  stats?: IProfileStatistics;
  forms: {
    cookADish: IFormState<ICookADishFormModel>
  };
}

export class ProfileLoadedEvent {
  static readonly type = '[DOMAIN] Profile loaded';

  constructor(public readonly profile: IProfile) {
  }
}

export class LoadFoodsListAction {
  static readonly DEFAULT_PAGE_SIZE = 10;
  static readonly type = '[DOMAIN] Load foods list';

  constructor(public readonly pageSize: number = LoadFoodsListAction.DEFAULT_PAGE_SIZE,
              public readonly name?: string,
              public readonly foodType?: FoodType) {
  }
}

export class FoodsListLoadedEvent {
  static readonly type = '[DOMAIN] Foods list loaded';

  constructor(public readonly foods: IPage<IFood>) {
  }
}

export class FoodsListLoadingFailedEvent {
  static readonly type = '[DOMAIN] Foods list loading failed';

  constructor(public readonly msg: string) {
  }
}

export class LoadMoreFoodsAction {
  static readonly type = '[DOMAIN] Load more foods';
}

export class MoreFoodsLoadedEvent {
  static readonly type = '[DOMAIN] More foods loaded';

  constructor(public readonly foods: IPage<IFood>) {
  }
}

export class MoreFoodsLoadingFailedEvent {
  static readonly type = '[DOMAIN] More foods loading failed';

  constructor(public readonly msg: string) {
  }
}

export class ConfigureProfileAction {
  static readonly type = '[DOMAIN] Configure profile';

  constructor(public readonly aims: IPfcc) {
  }
}

export class ProfileConfiguredSuccessfullyEvent {
  static readonly type = '[DOMAIN] Profile configuration updated';

  constructor(public readonly aims: IPfcc) {
  }
}

export class ProfileConfigurationFailedEvent {
  static readonly type = '[DOMAIN] Profile configuration failed';

  constructor(public readonly msg: string) {
  }
}

export class RemoveMealAction {
  static readonly type = '[DOMAIN] Remove meal';

  constructor(public readonly mealId: number) {
  }
}

export class MealRemovedSuccessfullyEvent {
  static readonly type = '[DOMAIN] Meal removed';

  constructor(public readonly mealId: number) {
  }
}

export class MealRemovingFailedEvent {
  static readonly type = '[DOMAIN] Meal removing failed';

  constructor(public readonly mealId: number,
              public readonly msg: string) {
  }
}

export class DeleteDishAction {
  static readonly type = '[DOMAIN] Delete dish';

  constructor(public readonly dishId: number) {
  }
}

export class DishDeletedEvent {
  static readonly type = '[DOMAIN] Dish deleted';

  constructor(public readonly dishId: number) {
  }
}

export class DishDeletionFailedEvent {
  static readonly type = '[DOMAIN] Dish deletion failed';

  constructor(public readonly dishId: number,
              public readonly msg: string) {
  }
}

export class AddMealAction {
  static readonly type = '[DOMAIN] Add meal';

  constructor(public readonly meal: IMeal) {
  }
}

export class MealAddedSuccessfullyEvent {
  static readonly type = '[DOMAIN] Meal added';

  constructor(public readonly meal: IMeal) {
  }
}

export class MealAddingFailedEvent {
  static readonly type = '[DOMAIN] Meal adding failed';

  constructor(public readonly meal: IMeal,
              public readonly msg: string) {
  }
}

export class InitiateCookADishForm {
  static readonly type = '[DOMAIN] Initiate Cook a Dish form';

  constructor(public readonly recipeId: number) {
  }
}

export class CookADishAddIngredient {
  static readonly type = '[DOMAIN] Cook a Dish - add ingredient';

  constructor(public readonly ingredient: { ingredient?: IFood, ingredientWeight: number, index: number }) {
  }
}

export class CookADishRemoveIngredient {
  static readonly type = '[DOMAIN] Cook a Dish - remove ingredient';

  constructor(public readonly idx: number) {
  }
}

export class CreateDishAction {
  static readonly type = '[DOMAIN] Create dish';

  constructor(public readonly dish: IDishToCreate) {
  }
}

export class DishCreatedEvent {
  static readonly type = '[DOMAIN] Dish created successfully';

  constructor(public readonly dish: IDish) {
  }
}

export class DishCreationFailedEvent {
  static readonly type = '[DOMAIN] Dish creation failed';

  constructor(public readonly msg: string) {
  }
}

export class CreateFoodAction {
  static readonly type = '[DOMAIN] Create food';

  constructor(public readonly food: Omit<IFood, 'id' | 'ownedByUser'>) {
  }
}

export class FoodCreatedEvent {
  static readonly type = '[DOMAIN] Food created';

  constructor(public readonly food: IFood) {
  }
}

export class CreateFoodFailedEvent {
  static readonly type = '[DOMAIN] Food creation failed';

  constructor(public readonly msg: string) {
  }
}

export class EditFoodAction {
  static readonly type = '[DOMAIN] Edit food';

  constructor(public readonly food: Omit<IFood, 'ownedByUser'>) {
  }
}

export class FoodUpdatedEvent {
  static readonly type = '[DOMAIN] Food updated';

  constructor(public readonly newFood: IFood, public readonly originalFoodId: number) {
  }
}

export class UpdateFoodFailedEvent {
  static readonly type = '[DOMAIN] Food update failed';

  constructor(public readonly msg: string) {
  }
}

export class DeleteFoodAction {
  static readonly type = '[DOMAIN] Delete food';

  constructor(public readonly id: number) {
  }
}

export class FoodDeletedEvent {
  static readonly type = '[DOMAIN] Food deleted';

  constructor(public readonly id: number) {
  }
}

export class DeleteFoodFailedEvent {
  static readonly type = '[DOMAIN] Food delete failed';

  constructor(public readonly msg: string) {
  }
}

export class LoadDishAction {
  static readonly type = '[DOMAIN] Load dish';

  constructor(public readonly dishId: number) {
  }
}

export class DishLoadedEvent {
  static readonly type = '[DOMAIN] Dish loaded';

  constructor(public readonly dish: IDish) {
  }
}

export class DishLoadingFailedEvent {
  static readonly type = '[DOMAIN] Loading dish failed';

  constructor(public readonly msg: string) {
  }
}
