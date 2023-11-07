import {DateTime} from 'luxon';
import {IPfcc} from './common.models';
import {Language} from './auth.models';

interface IBaseFood {
    id: number;
    name: string;
    description?: string;
    pfcc: IPfcc;
    hidden: boolean;
    ownedByUser: boolean;
    type: FoodType;
}

export type IIngredient = (IFood & {
    ingredientWeight: number
});

export type IFood =
    (IBaseFood & {
        type: 'INGREDIENT',
        ingredients: null
    }) |
    (IBaseFood & {
        type: 'RECIPE',
        ingredients: IIngredient[]
    });

export type FoodType = 'INGREDIENT' | 'RECIPE';

export interface IDish {
    id: number;
    cookedOn: DateTime;
    pfcc: IPfcc;
    name: string;
    foodId: number;
    ingredients: IIngredient[]
    recipeWeight: number;
    cookedWeight: number;
    deleted: boolean;
}

export interface IMeal {
    id: number | null;
    name: string;
    eatenOn: DateTime;
    weight: number;
    pfcc: IPfcc;
    foodId: number;
    dishId: number | null;
}

export interface IProfile {
    email: string;
    name: string;
    preferredLanguage: Language;
    aims: IPfcc;
    profileConfigured: boolean;
    dishes: IDish[];
    meals: IMeal[];
}


export interface IProfileStatistics {
    nutrients: {
        weeklyAverage: IPfcc,
        monthlyAverage: IPfcc
    }
}

export interface IDishToCreate {
    cookedOn: DateTime;
    name: string;
    foodId: number;
    ingredients: IIngredient[]
    cookedWeight: number;
}
