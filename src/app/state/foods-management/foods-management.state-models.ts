import {IFood} from '../../commons/models/domain.models';


export interface IFoodsManagementState {
  products: {
    data: IFood[],
    page: number,
    pageSize: number,
    totalElements: number,
    totalPages: number,

    name: string,
  },
  recipes: {
    data: IFood[],
    page: number,
    pageSize: number,
    totalElements: number,
    totalPages: number,

    name: string,
  },
}

export namespace FoodsManagement {
  export const LOAD_MORE_PRODUCTS = '[FoodsManagement] Load More Products';
  export const LOAD_MORE_RECIPES = '[FoodsManagement] Load More Recipes';
  export const LOAD_PRODUCTS = '[FoodsManagement] Load Products';
  export const LOAD_RECIPES = '[FoodsManagement] Load Recipes';
  export const CREATE_FOOD = '[FoodsManagement] Create Food';
  export const EDIT_FOOD = '[FoodsManagement] Edit Food';
  export const DELETE_FOOD = '[FoodsManagement] Delete Food';

  export interface LoadFoodsActionPayload {
    page: number,
    pageSize: number,
    name: string,
  }

  export type CreateFoodActionPayload = Omit<IFood, 'id' | 'ownedByUser'>

  export type EditFoodActionPayload = Omit<IFood, 'ownedByUser'>

  export type DeleteFoodActionPayload = number;
}
