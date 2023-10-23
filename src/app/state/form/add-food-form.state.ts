import {Action, Selector, State, StateContext} from "@ngxs/store";
import {
    AddFoodFormResetAction,
    AddFoodFormStatusChangedEvent,
    AddFoodFormValueChangedEvent,
    AddFoodIngredientsCleanedUpEvent,
    AddFoodPfccRecalculatedEvent,
    FoodFormIngredient,
    IAddFoodFormModel,
    IAddFoodFormState,
} from "./add-food-form.state-models";
import {Injectable} from "@angular/core";

export const ADD_FOOD_FORM_STATE_NAME = 'addFoodForm';

const DEFAULTS: IAddFoodFormState = {
    model: {
        name: null,
        description: null,
        isHidden: false,
        pfcc: {
            protein: 0,
            fat: 0,
            carbohydrates: 0,
            calories: 0,
        },
        ingredients: [],
    },
    dirty: false,
    status: 'PENDING',
    errors: null,
};

@State<IAddFoodFormState>({
    name: ADD_FOOD_FORM_STATE_NAME,
    defaults: DEFAULTS,
})
@Injectable()
export class AddFoodFormState {

    @Selector()
    static model(state: IAddFoodFormState): IAddFoodFormModel | undefined {
        return state.model;
    }

    @Selector()
    static ingredients(state: IAddFoodFormState): FoodFormIngredient[] {
        return state.model.ingredients;
    }

    @Action(AddFoodFormValueChangedEvent)
    handleAddFoodFormValueChangedEvent(ctx: StateContext<IAddFoodFormState>, action: AddFoodFormValueChangedEvent) {
        ctx.patchState({
            model: {...action.data},
        });
    }

    @Action(AddFoodFormStatusChangedEvent)
    handleAddFoodFormStatusChangedEvent(ctx: StateContext<IAddFoodFormState>, action: AddFoodFormStatusChangedEvent) {
        ctx.patchState({
            status: action.status,
            errors: action.errors,
        });
    }

    @Action(AddFoodFormResetAction)
    handleAddFoodFormResetAction(ctx: StateContext<IAddFoodFormState>, action: AddFoodFormResetAction) {
        ctx.setState(DEFAULTS);
    }

    @Action(AddFoodPfccRecalculatedEvent)
    handleAddFoodPfccRecalculatedEvent(ctx: StateContext<IAddFoodFormState>, action: AddFoodPfccRecalculatedEvent): void {
        ctx.patchState({
            model: {
                ...ctx.getState().model,
                pfcc: action.pfcc,
            },
        });
    }

    @Action(AddFoodIngredientsCleanedUpEvent)
    handleAddFoodIngredientsChangedEvent(ctx: StateContext<IAddFoodFormState>, action: AddFoodIngredientsCleanedUpEvent): void {
        ctx.patchState({
            model: {
                ...ctx.getState().model,
                ingredients: [],
            },
        });
    }
}
