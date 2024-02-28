import {IDish, IDishToCreate, IFood} from '../../commons/models/domain.models';

export namespace AddDish {
  export type IAddDishState = {
    recipeId: number;
    dishId: number;
    ingredientOptions: IFood[][];
    initialization: IDish;
  };
  export type IAddDishStateIngredient = {
    index: number;
    weight: number;
    ingredient: IFood;
    options: IFood[];
    filter: string;
  };

  export type LoadRecipePayload = number;
  export type LoadDishPayload = number;
  export type AddIngredientPayload = void;
  export type DeleteIngredientPayload = number;
  export type SearchIngredientOptionsPayload = {
    filter: string;
    index: number;
    id: number;
  };
  export type SaveDishPayload = IDishToCreate;

  export const OPTIONS_PAGE_SIZE = 10;

  export const LOAD_RECIPE = '[AddDish] Load Recipe';
  export const LOAD_DISH = '[AddDish] Load Dish';
  export const ADD_INGREDIENT = '[AddDish] Add Ingredient';
  export const DELETE_INGREDIENT = '[AddDish] Delete Ingredient';
  export const SEARCH_INGREDIENT_OPTIONS = '[AddDish] Search Ingredient Options';
  export const SAVE_DISH = '[AddDish] Save Dish';
}
