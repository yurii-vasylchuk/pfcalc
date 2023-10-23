import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {IPage} from '../../commons/models/common.models';
import {IFood} from '../../commons/models/domain.models';
import {
    AddFoodIngredientsLoadedEvent,
    AddFoodIngredientsLoadingFailedEvent,
    AddFoodSearchIngredientTermChangedAction,
    IUiAddFoodModel,
} from './ui.add-food-models';
import {ApiService} from '../../service/api.service';
import {catchError, map, of} from 'rxjs';
import {
    EditingFoodLoadedEvent,
    EditingFoodLoadingFailedEvent,
    LoadEditingFoodAction,
} from '../form/add-food-form.state-models';
import {Injectable} from '@angular/core';

const UI_ADD_FOOD_STATE_NAME = 'UiAddFood';

@State<IUiAddFoodModel>({
    name: UI_ADD_FOOD_STATE_NAME,
    defaults: {
        ingredientsOptions: new Map<number, Partial<IPage<IFood> & { searchTerm: string }>>,
        editingFood: null,
    },
})
@Injectable()
export class UiAddFoodState {
    constructor(private api: ApiService) {
    }

    static ingredientsOptions(ingredientIdx: number) {
        return createSelector([UiAddFoodState], (state: IUiAddFoodModel) => state.ingredientsOptions.get(ingredientIdx)?.data ?? []);
    }

    @Selector()
    static editingFood(state: IUiAddFoodModel): IFood {
        return state.editingFood;
    }

    @Selector()
    static allIngredientsOptions(state: IUiAddFoodModel) {
        return state.ingredientsOptions;
    }

    @Action(AddFoodSearchIngredientTermChangedAction)
    handleAddFoodSearchIngredientTermChangedAction(ctx: StateContext<IUiAddFoodModel>, action: AddFoodSearchIngredientTermChangedAction) {
        const newOptions = new Map(ctx.getState().ingredientsOptions);
        newOptions.set(action.ingredientIdx, {searchTerm: action.term});

        ctx.patchState({
            ingredientsOptions: newOptions,
        });

        return this.api.loadFoodsList(0, 10, action.term)
            .pipe(
                map(rsp => new AddFoodIngredientsLoadedEvent(rsp, action.ingredientIdx)),
                catchError(err => of(new AddFoodIngredientsLoadingFailedEvent(err.message))),
                map(ctx.dispatch),
            );
    }

    @Action(AddFoodIngredientsLoadedEvent)
    handleAddFoodIngredientsLoadedEvent(ctx: StateContext<IUiAddFoodModel>, action: AddFoodIngredientsLoadedEvent) {
        const {page, pageSize, totalPages, totalElements, data} = action.ingredients;
        const newOptions = new Map(ctx.getState().ingredientsOptions);
        newOptions.set(action.ingredientIdx, {
            ...newOptions.get(action.ingredientIdx),
            data,
            page,
            pageSize,
            totalPages,
            totalElements,
        });

        ctx.patchState({
            ingredientsOptions: newOptions,
        });
    }

    @Action(AddFoodIngredientsLoadingFailedEvent)
    handleAddFoodIngredientsLoadingFailedEvent(ctx: StateContext<IUiAddFoodModel>, action: AddFoodIngredientsLoadingFailedEvent) {
        console.warn(action.msg);
    }

    @Action(LoadEditingFoodAction)
    handleLoadEditingFoodAction(ctx: StateContext<IUiAddFoodModel>, action: LoadEditingFoodAction) {
        return this.api.loadFood(action.id)
            .pipe(
                map(food => new EditingFoodLoadedEvent(food)),
                catchError(err => of(new EditingFoodLoadingFailedEvent(err.message))),
                map(ctx.dispatch),
            );
    }

    @Action(EditingFoodLoadedEvent)
    handleEditingFoodLoadedEvent(ctx: StateContext<IUiAddFoodModel>, action: EditingFoodLoadedEvent) {
        ctx.patchState({
            editingFood: action.food,
        });
    }

    @Action(EditingFoodLoadingFailedEvent)
    handleEditingFoodLoadingFailedEvent(ctx: StateContext<IUiAddFoodModel>, action: EditingFoodLoadingFailedEvent) {
        console.warn(action.msg);
    }
}
