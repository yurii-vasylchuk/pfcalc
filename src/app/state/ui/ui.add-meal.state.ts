import {State} from '@ngxs/store';
import {IUiAddMealModel} from './ui.add-meal-models';
import {Injectable} from '@angular/core';

export const UI_ADD_MEAL_STATE_NAME = 'UiAddMeal'

@State<IUiAddMealModel>({
  name: UI_ADD_MEAL_STATE_NAME
})
@Injectable()
export class UiAddMealState {

}
