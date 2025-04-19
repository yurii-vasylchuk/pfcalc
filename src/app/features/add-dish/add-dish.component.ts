import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, TrackByFunction} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot'
import {AddDishState} from './add-dish.state'
import {AddDish} from './add-dish.state-models'
import {hasActionsExecuting} from '@ngxs-labs/actions-executing'
import {DialogPageHeadingComponent} from '../../components/dialog-page-heading/dialog-page-heading.component'
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {debounceTime, distinctUntilChanged, filter, Subject, take, takeUntil} from 'rxjs'
import {IFood, IMeasurement} from '../../commons/models/domain.models'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {TranslateModule} from '@ngx-translate/core'
import {MatSelectModule} from '@angular/material/select'
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {Store} from '@ngxs/store'
import {DateTime} from 'luxon'

type IngredientFormGroup = FormGroup<{
  ingredientSearch: FormControl<string>;
  ingredient: FormControl<IFood | null>;
  weight: FormControl<number>;
  measurement: FormControl<IMeasurement>;
  id: FormControl<number>;
}>;
type AddDishFormGroup = FormGroup<{
  id: FormControl<number>;
  foodId: FormControl<number>;
  dishName: FormControl<string>;
  ingredients: FormArray<IngredientFormGroup>;
  weight: FormControl<number>;
}>;

@Component({
  selector: 'pfc-add-dish',
  imports: [CommonModule, DialogPageHeadingComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, TranslateModule, MatSelectModule, NgxMatSelectSearchModule, MatButtonModule, MatIconModule],
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDishComponent implements OnInit, OnDestroy {
  protected readonly defaultMeasurement: IMeasurement = {
    foodId: null,
    id: null,
    toGramMultiplier: 1,
    name: 'g',
    defaultValue: 100,
  }

  protected readonly measurements: IMeasurement[] = [
    this.defaultMeasurement,
  ]
  @ViewSelectSnapshot(AddDishState.options)
  protected options: IFood[][]
  @ViewSelectSnapshot(hasActionsExecuting([{type: AddDish.LOAD_RECIPE}, {type: AddDish.LOAD_DISH}]))
  protected isLoading: boolean
  protected form: AddDishFormGroup
  @Emitter(AddDishState.addIngredient)
  private addIngredient: Emittable<AddDish.AddIngredientPayload>
  @Emitter(AddDishState.deleteIngredient)
  private deleteIngredient: Emittable<AddDish.DeleteIngredientPayload>
  @Emitter(AddDishState.searchIngredientOptions)
  private searchIngredientOptions: Emittable<AddDish.SearchIngredientOptionsPayload>
  @Emitter(AddDishState.saveDish)
  private saveDish: Emittable<AddDish.SaveDishPayload>
  private destroyed$ = new Subject<void>()
  private nextIngredientIdx = 0

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = fb.group({
      id: [null as number],
      foodId: [null as number],
      dishName: [null as string, Validators.required],
      weight: [0, Validators.required],
      ingredients: fb.array<IngredientFormGroup>([]),
    })
  }

  protected get formIngredients(): FormArray<IngredientFormGroup> {
    return this.form.controls.ingredients
  }

  ngOnInit(): void {
    this.store.select(AddDishState.initialization)
      .pipe(
        filter(value => value != null),
        take(1),
      )
      .subscribe(init => {
        this.form.patchValue({
          id: init.id,
          foodId: init.foodId,
          dishName: init.name,
          weight: init.cookedWeight,
        })
        init.ingredients.forEach((ing, idx) => {
          this.addIngredient.emit()
          this.handleAddIngredientClicked()
          this.form.controls.ingredients.at(idx).patchValue({
            ingredient: {...ing},
            weight: ing.ingredientWeight,
          })
        })
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null)
    this.destroyed$.complete()
  }

  handleSubmit() {
    if (this.form.invalid) {
      console.warn('Invalid form submitted')
      return
    }
    const form = this.form.value
    this.saveDish.emit({
      name: form.dishName,
      foodId: form.foodId,
      ingredients: form.ingredients.map((i, index) => ({
        id: i.ingredient.id,
        ingredientWeight: i.weight,
        ingredientIndex: index,
      })),
      cookedWeight: form.weight,
      cookedOn: DateTime.now(),
    })
  }

  handleDeleteClicked(id: number) {
    const idx = this.ingredientIndexById(id)
    this.deleteIngredient.emit(idx)
    this.formIngredients.removeAt(idx)
  }

  handleAddIngredientClicked() {
    const ingredientFg: IngredientFormGroup = this.fb.group({
      ingredientSearch: [null as string],
      ingredient: [null as IFood, Validators.required],
      weight: [this.defaultMeasurement.defaultValue, [Validators.required, Validators.min(1)]],
      measurement: [this.defaultMeasurement, [Validators.required]],
      id: [this.nextIngredientIdx++],
    })

    ingredientFg.controls.measurement.valueChanges.subscribe(measurement => {
      ingredientFg.patchValue({
        weight: measurement.defaultValue,
      })
    })

    ingredientFg.valueChanges.pipe(
      takeUntil(this.destroyed$),
      debounceTime(300),
      distinctUntilChanged((previous, current) => previous.ingredientSearch === current.ingredientSearch),
    ).subscribe(ing => this.searchIngredientOptions.emit({
      filter: ing.ingredientSearch,
      index: this.ingredientIndexById(ing.id),
      id: ing.ingredient?.id,
    }))

    this.addIngredient.emit()
    this.formIngredients.push(ingredientFg)
  }

  protected compareFoodFn = (ing1: IFood, ing2: IFood) => ing1?.id === ing2?.id

  protected trackFoodByIdFn: TrackByFunction<IFood> = (_, item) => item?.id

  private ingredientIndexById(id: number) {
    return this.formIngredients.value
      .map((ing, idx) => ([ing.id, idx]))
      .filter(v => v[0] === id)
      .map(i => i[1])
      [0]
  }
}
