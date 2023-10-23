import {IPage} from '../../commons/models/common.models';
import {IFood} from '../../commons/models/domain.models';

export interface IUiAddFoodModel {
    ingredientsOptions: Map<number, Partial<IPage<IFood> & { searchTerm: string }>>,
    editingFood: IFood,
}


export class AddFoodSearchIngredientTermChangedAction {
    static readonly type = '[UI - AddFood] Ingredient search ingredient term changed';

    constructor(public readonly term: string, public readonly ingredientIdx: number) {
    }
}

export class AddFoodIngredientsLoadedEvent {
    static readonly type = '[UI - AddFood] Ingredients loaded';

    constructor(public readonly ingredients: IPage<IFood>, public readonly ingredientIdx: number) {
    }
}

export class AddFoodIngredientsLoadingFailedEvent {
    static readonly type = '[UI - AddFood] Ingredients loading failed';

    constructor(public readonly msg: string) {
    }
}
