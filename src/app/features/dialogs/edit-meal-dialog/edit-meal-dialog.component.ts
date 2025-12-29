import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {
  IFood,
  IFoodIngredient,
  IMeal,
  IMealIngredient,
  IMeasurement,
  IWeight,
} from '../../../commons/models/domain.models'
import {BehaviorSubject, filter, Observable} from 'rxjs'
import {Store} from '@ngxs/store'
import {hasActionsExecuting} from '@ngxs-labs/actions-executing'
import {EditMeal} from './edit-meal.state-models'
import {MatProgressBar} from '@angular/material/progress-bar'
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog'
import {TranslatePipe} from '@ngx-translate/core'
import {AsyncPipe} from '@angular/common'
import {WeightInputComponent} from '../../../components/weight-input/weight-input.component'
import {EditMealState} from './edit-meal.state'
import {
  IngredientsEditFormComponent,
  MealIngredientConfig,
} from '../../../components/ingredients-edit-form/ingredients-edit-form.component'
import {MatButton} from '@angular/material/button'
import {Emittable, Emitter} from '@ngxs-labs/emitter'

export type EditMealDialogParams = {
  meal: IMeal
}

export type EditMealDialogResult = {
  weight: IWeight,
  ingredients?: IMealIngredient[],
}

@Component({
  selector: 'pfc-edit-meal-dialog',
  imports: [
    MatProgressBar,
    MatDialogContent,
    MatDialogTitle,
    TranslatePipe,
    AsyncPipe,
    WeightInputComponent,
    IngredientsEditFormComponent,
    MatButton,
    MatDialogActions,
  ],
  templateUrl: './edit-meal-dialog.component.html',
  styleUrl: './edit-meal-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditMealDialogComponent implements OnInit {
  protected meal = inject<EditMealDialogParams>(MAT_DIALOG_DATA).meal
  protected ingredientGroups$ = new BehaviorSubject<MealIngredientConfig[]>([])
  protected measurements$ = new BehaviorSubject<IMeasurement[]>([])
  private dialogRef = inject(MatDialogRef<EditMealDialogComponent, EditMealDialogResult>)
  private store = inject(Store)
  protected foodLoading$: Observable<boolean> = this.store.select(hasActionsExecuting([{type: EditMeal.LOAD_FOOD}]))
  @Emitter(EditMealState.loadFood)
  private loadFood: Emittable<EditMeal.LoadFoodPayload>
  private food$: Observable<IFood> = this.store.select(EditMealState.food)
    .pipe(
      filter(food => food != null),
    )

  private result$ = new BehaviorSubject<EditMealDialogResult>({
    weight: this.meal.weight,
    ingredients: this.meal.ingredients,
  })

  ngOnInit(): void {
    this.food$.subscribe(food => {
      this.measurements$.next(food.measurements)
    })

    this.food$.subscribe(food => {
      if (food == null) {
        this.ingredientGroups$.next([])
      }

      const foodIngredients = new Map<number, IFoodIngredient[]>()

      food.ingredients.forEach(ingredient => {
        let group = foodIngredients.get(ingredient.ingredientIndex)
        if (group == null) {
          group = []
          foodIngredients.set(ingredient.ingredientIndex, group)
        }

        group.push(ingredient)
      })

      this.ingredientGroups$.next(Array.from(foodIngredients.entries()).map(([idx, ingredients]) => {
        const mi = this.meal.ingredients.find(mi => mi.ingredientIndex === idx)
        return ({
          options: ingredients,
          weight: mi?.ingredientWeight,
          selectedOptionIndex: ingredients.findIndex(fi => fi.id === mi?.id),
        })
      }))
    })

    this.loadFood.emit({
      id: this.meal.foodId,
    })
  }

  handleWeightChanged(weight: IWeight) {
    this.result$.next({
      ...this.result$.value,
      weight,
    })
  }

  handleIngredientsChanged(ingredients: IMealIngredient[]) {
    this.result$.next({
      ...this.result$.value,
      ingredients,
    })
  }

  handleCloseDialogClick() {
    this.dialogRef.close()
  }

  handleSaveClick() {
    this.dialogRef.close(this.result$.value)
  }
}
