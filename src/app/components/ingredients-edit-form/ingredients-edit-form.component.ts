import {ChangeDetectionStrategy, Component, effect, inject, input, OnDestroy, output, signal} from '@angular/core'
import {
  defaultMeasurement,
  IFoodIngredient,
  IMealIngredient,
  IMeasurement,
  IWeight,
} from '../../commons/models/domain.models'
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {Subject, Subscription, takeUntil} from 'rxjs'
import {MatProgressBar} from '@angular/material/progress-bar'
import {MatOption, MatSelect} from '@angular/material/select'
import {MatFormField} from '@angular/material/form-field'
import {TranslatePipe} from '@ngx-translate/core'
import {MatDivider} from '@angular/material/divider'
import {MatCheckbox} from '@angular/material/checkbox'
import {FormControlValue} from '../../commons/models/common.models'
import {WeightInputComponent} from '../weight-input/weight-input.component'

type EditMealIngredientFG = FormGroup<{
  ingredient: FormControl<IFoodIngredient>;
  include: FormControl<boolean>;
  weight: FormControl<IWeight>;
}>

type EditMealIngredientsForm = FormGroup<{
  ingredients: FormArray<EditMealIngredientFG>
}>


export type MealIngredientConfig = {
  options: IFoodIngredient[];
  selectedOptionIndex?: number;
  weight?: IWeight;
}

@Component({
  selector: 'pfc-ingredients-edit-form',
  imports: [
    MatProgressBar,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    TranslatePipe,
    MatDivider,
    MatCheckbox,
    WeightInputComponent,

  ],
  templateUrl: './ingredients-edit-form.component.html',
  styleUrl: './ingredients-edit-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientsEditFormComponent implements OnDestroy {
  ingredientGroups = input.required<MealIngredientConfig[]>()
  result = output<IMealIngredient[]>()

  protected measurementsByGroup = signal<IMeasurement[][]>([])

  protected form: EditMealIngredientsForm

  private resultSubscription: Subscription
  private destroy$ = new Subject<void>()

  constructor() {
    const fb = inject(FormBuilder)

    effect(() => {
      const groups = this.ingredientGroups()?.sort((a, b) => a.options[0].ingredientIndex - b.options[0].ingredientIndex)
      this.initializeForm(fb, groups)
      this.subscribeToFormChanges()
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  protected handleWeightChanged(groupIdx: number, weight: IWeight): void {
    this.form.controls.ingredients.at(groupIdx).patchValue({
      weight,
    })
  }

  private initializeForm(fb: FormBuilder, groups: MealIngredientConfig[]) {
    this.form = fb.group({
      ingredients: fb.array((groups ?? []).map(g => {
        const selectedOption = g.selectedOptionIndex >= 0 ? g.options[g.selectedOptionIndex] : g.options[0]
        return fb.group(
          {
            ingredient: fb.control<IFoodIngredient>(selectedOption),
            weight: fb.control<IWeight>(g.selectedOptionIndex >= 0 ? g.weight : selectedOption.ingredientWeight),
            include: fb.control(g.selectedOptionIndex >= 0),
          },
        )
      })),
    })

    this.measurementsByGroup.set(this.form.value.ingredients.map(i => ([
      defaultMeasurement,
      ...i.ingredient.measurements,
    ])))
  }

  private subscribeToFormChanges() {
    if (this.resultSubscription != null) {
      this.resultSubscription.unsubscribe()
    }

    this.resultSubscription = this.form.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe(_ => {
      const ingredients = this.form.getRawValue().ingredients
      console.log(ingredients)

      ingredients.forEach((ingredient) => {
        if (ingredient.weight.measurementId === defaultMeasurement.id) {
          ingredient.weight = {
            inGram: ingredient.weight.inGram,
            measurementId: null,
            measurementCount: null,
            measurementName: null,
          }
        }
      })

      this.emitChangesEvent(ingredients)
    })
  }

  private emitChangesEvent(ingredients: FormControlValue<FormArray<EditMealIngredientFG>>) {
    this.measurementsByGroup.set(ingredients.map(i => ([
      defaultMeasurement,
      ...i.ingredient.measurements,
    ])))

    this.result.emit(ingredients.filter(ing => ing.include).map(ing => ({
      ...ing.ingredient,
      ingredientWeight: ing.weight,
    })))
  }
}
