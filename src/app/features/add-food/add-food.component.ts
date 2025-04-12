import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, TrackByFunction} from '@angular/core'
import {CommonModule} from '@angular/common'
import {DialogPageHeadingComponent} from '../../components/dialog-page-heading/dialog-page-heading.component'
import {ceilPfcc, multiplyPfcc, sumPfccs, withDefaults} from '../../commons/functions'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatOptionModule} from '@angular/material/core'
import {MatSelectModule} from '@angular/material/select'
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle'
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search'
import {IFood, IIngredient, IMeasurement} from '../../commons/models/domain.models'
import {Store} from '@ngxs/store'
import {AddFoodState} from './add-food.state'
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot'
import {BehaviorSubject, debounceTime, filter, map, skipWhile, Subject, take, takeUntil} from 'rxjs'
import {emptyPfcc, IPfcc} from '../../commons/models/common.models'
import {Emitter} from '@ngxs-labs/emitter'
import {AddFood} from './add-food.state-models'
import {TranslateModule, TranslateService} from '@ngx-translate/core'
import {MatCheckbox} from '@angular/material/checkbox'

type AddFoodIngredientForm = FormGroup<{
  ingredientSearch: FormControl<string>;
  ingredient: FormControl<IFood>;
  measurement: FormControl<IMeasurement>;
  weight: FormControl<number>;
  index: FormControl<number>;
}>;

type AddFoodMeasurementForm = FormGroup<{
  id: FormControl<number>;
  name: FormControl<string>;
  multiplier: FormControl<number>;
  defaultValue: FormControl<number>;
  index: FormControl<number>;
  deleted: FormControl<boolean>;
}>;

type AddPortionsForm = FormGroup<{
  enabled: FormControl<boolean>;
  portionsCount: FormControl<number>;
  name: FormControl<string>;
}>;

type AddFoodForm = {
  id: FormControl<number>;
  name: FormControl<string>;
  description: FormControl<string>;
  isRecipe: FormControl<boolean>;
  hidden: FormControl<boolean>;
  pfcc: FormGroup<{ [p in keyof IPfcc]: FormControl<IPfcc[p]> }>;
  portions: AddPortionsForm;
  ingredients: FormArray<AddFoodIngredientForm>;
  measurements: FormArray<AddFoodMeasurementForm>;
};

@Component({
  selector: 'pfc-add-food',
  standalone: true,
  imports: [
    CommonModule, DialogPageHeadingComponent, FormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, NgxMatSelectSearchModule, ReactiveFormsModule, TranslateModule, MatCheckbox,
  ],
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFoodComponent implements OnInit, OnDestroy {
  private static readonly CREATE_TITLE = 'add-food.title-create'
  private static readonly EDIT_TITLE = 'add-food.title-edit'

  protected readonly ceilPfcc = ceilPfcc
  protected readonly multiplyPfcc = multiplyPfcc
  protected readonly defaultMeasurement: IMeasurement = {
    id: null,
    name: 'g',
    foodId: null,
    defaultValue: 100,
    toGramMultiplier: 1,
  }

  @ViewSelectSnapshot(AddFoodState.ingredients)
  protected ingredientsOptions: IFood[][]
  @Emitter(AddFoodState.saveFood)
  protected saveFood: EventEmitter<AddFood.SaveFoodPayload>
  protected title = AddFoodComponent.CREATE_TITLE
  protected form: FormGroup<AddFoodForm>
  protected usedIngredientsIds$ = new BehaviorSubject<number[]>([])
  @Emitter(AddFoodState.reloadIngredientOptions)
  private reloadIngredientOptions: EventEmitter<AddFood.ReloadIngredientOptionsPayload>
  @Emitter(AddFoodState.dropMeasurements)
  private dropMeasurements: EventEmitter<number[]>
  private nextIngredientIndex = 1
  private nextMeasurementIndex = 1
  private $destroy = new Subject<void>()

  constructor(private fb: FormBuilder, private store: Store, private translateService: TranslateService) {
  }

  protected get isRecipe(): boolean {
    return this.form.value.isRecipe
  }

  protected get ceiledPfcc(): IPfcc {
    return ceilPfcc(withDefaults(this.form.value.pfcc, emptyPfcc))
  }

  protected get totalRecipeWeight(): number {
    if (!this.isRecipe) {
      return 0
    }

    return this.form.value.ingredients.map(i => i.weight * i.measurement.toGramMultiplier).reduce((w1, w2) => w1 + w2, 0)
  }

  ngOnInit(): void {
    this.createForm()

    this.form.controls.ingredients.valueChanges
      .pipe(takeUntil(this.$destroy))
      .subscribe(ingredients => {
        this.recalculateUsedIngredients(ingredients.map(i => i.ingredient))
      })

    this.form.valueChanges.pipe(
      filter(form => form.isRecipe),
      map(form => form.ingredients.filter(i => i?.ingredient != null)),
    ).subscribe(ingredients => {
      this.form.patchValue({
        pfcc: sumPfccs(...ingredients.map(i => multiplyPfcc(i.ingredient.pfcc, (i.weight * i.measurement.toGramMultiplier) / 100))),
      }, {emitEvent: false})
    })

    this.form.controls.ingredients.valueChanges.pipe(
      takeUntil(this.$destroy),
      debounceTime(100),
      map(ingredients => ingredients.map(i => ({
        searchString: i.ingredientSearch,
        selectedIngredient: i.ingredient,
      })) as AddFood.ReloadIngredientOptionsPayload),
    ).subscribe(this.reloadIngredientOptions.emit)

    this.initializeFromData()
  }

  ngOnDestroy() {
    this.$destroy.next(null)
    this.$destroy.complete()
    this.usedIngredientsIds$.complete()
  }

  handleDeleteMeasurement(idx: number) {
    this.form.controls.measurements.at(idx).patchValue({
      deleted: true,
    })
  }

  protected trackByIndexFn: TrackByFunction<{
    index: number
  }> = (_, i) => `${i.index}`

  protected compareIngredientsFn = (ing1: any, ing2: any) => ing1?.id === ing2?.id

  protected trackFoodByIdFn: TrackByFunction<IFood> = (_, item) => item?.id

  protected handleRemoveIngredientClick(idx: number) {
    this.form.controls.ingredients.removeAt(idx)
  }

  protected handleAddMeasurementClick() {
    const measurementFormGroup = this.fb.group({
      id: this.fb.control(null as number),
      name: this.fb.control('', Validators.required),
      multiplier: this.fb.control(100, Validators.required),
      defaultValue: this.fb.control(1, Validators.required),
      index: this.fb.control(this.nextMeasurementIndex++),
      deleted: this.fb.control(false),
    })

    this.form.controls.measurements.push(measurementFormGroup)
  }

  protected handleAddIngredientClick() {
    const ingredientFormGroup = this.fb.group({
      ingredient: this.fb.control(null as IFood),
      ingredientSearch: this.fb.control(''),
      measurement: this.fb.control(this.defaultMeasurement),
      weight: this.fb.control(100),
      index: this.fb.control(this.nextIngredientIndex++),
    })

    ingredientFormGroup.controls.measurement.valueChanges
      .subscribe(m => ingredientFormGroup.patchValue({
        weight: m.defaultValue,
      }))
    ingredientFormGroup.controls.ingredient.valueChanges
      .subscribe(_ => ingredientFormGroup.controls.measurement.setValue(this.defaultMeasurement))

    this.form.controls.ingredients.push(ingredientFormGroup)
  }

  protected handleNutrientInputFocus(formElementName: keyof IPfcc) {
    if (this.form.controls.pfcc.controls[formElementName].pristine && this.form.controls.pfcc.controls[formElementName].value === 0) {
      this.form.controls.pfcc.controls[formElementName].setValue(null)
    }
  }

  protected handleNutrientInputClick(event: MouseEvent) {
    if (event.target instanceof HTMLInputElement) {
      event.target.select()
    }
  }

  protected handleRecipeSwitcherChanged(data: MatSlideToggleChange) {
    if (data.checked) {
      this.form.controls.pfcc.setValue(emptyPfcc)
    } else {
      this.form.controls.ingredients.clear()
    }
  }

  protected handleSubmit() {
    const f = this.form.value
    const measurements = f.measurements.filter(m => !m.deleted).map<IMeasurement>(m => ({
      id: m.id,
      foodId: f.id,
      name: m.name,
      toGramMultiplier: m.multiplier,
      defaultValue: m.defaultValue,
    }))

    const measurementsToDelete = f.measurements.filter(m => m.deleted && m.id != null).map(m => m.id as number)

    if (f.isRecipe && f.portions.enabled) {
      measurements.push({
        id: null,
        foodId: f.id,
        name: f.portions.name,
        toGramMultiplier: f.ingredients.map(i => i.weight * i.measurement.toGramMultiplier).reduce((a, b) => a + b) / f.portions.portionsCount,
        defaultValue: 1,
      })
    }

    const foodToSave: IFood = {
      id: f.id,
      name: f.name,
      description: f.description,
      type: f.isRecipe ? 'RECIPE' : 'INGREDIENT',
      hidden: f.hidden,
      ownedByUser: true,
      pfcc: withDefaults(f.pfcc, emptyPfcc),
      ingredients: !f.isRecipe ? null : f.ingredients.map<IIngredient>((i, index) => ({
        ...i.ingredient,
        ingredientWeight: i.weight * i.measurement.toGramMultiplier,
        ingredientIndex: index,
      })),
      measurements,
    }

    this.saveFood.emit(foodToSave)
    this.dropMeasurements.emit(measurementsToDelete)
  }

  private initializeFromData() {
    this.store.select(AddFoodState.initializationVector)
      .pipe(
        skipWhile(food => food == null),
        takeUntil(this.$destroy),
        take(1),
      )
      .subscribe(food => {
        if (food.id == null) {
          this.form.patchValue({
            name: food.name,
            isRecipe: food?.type === 'RECIPE' ?? false,
          })
        } else {
          this.title = AddFoodComponent.EDIT_TITLE
          this.form.controls.ingredients.clear()

          food.ingredients?.forEach(_ => this.handleAddIngredientClick())
          food.measurements?.forEach(_ => this.handleAddMeasurementClick())

          const ingredients = (food.ingredients ?? []).map((i => ({
            ingredient: i,
            ingredientSearch: null,
            weight: i.ingredientWeight,
            index: this.nextIngredientIndex++,
          })))
          const measurements = (food.measurements ?? []).map(m => ({
            id: m.id,
            name: m.name,
            multiplier: m.toGramMultiplier,
            defaultValue: m.defaultValue,
            index: this.nextMeasurementIndex++,
          }))

          this.form.patchValue({
            id: food.id,
            name: food.name,
            description: food.description,
            isRecipe: food.type === 'RECIPE',
            hidden: food.hidden,
            portions: {
              enabled: false,
            },
            pfcc: {
              protein: food.pfcc?.protein,
              fat: food.pfcc?.fat,
              carbohydrates: food.pfcc?.carbohydrates,
              calories: food.pfcc?.calories,
            },
            ingredients,
            measurements,
          })
        }
      })
  }

  private createForm() {
    this.form = this.fb.group<AddFoodForm>({
      id: this.fb.control(null as number),
      isRecipe: this.fb.control(false),
      name: this.fb.control(null as string, Validators.required),
      description: this.fb.control(null as string),
      hidden: this.fb.control(false),
      pfcc: this.fb.group({
        protein: [0, [Validators.required, Validators.min(0)]],
        fat: [0, [Validators.required, Validators.min(0)]],
        carbohydrates: [0, [Validators.required, Validators.min(0)]],
        calories: [0, [Validators.required, Validators.min(0)]],
      }),
      portions: this.fb.group({
        enabled: this.fb.control(true),
        portionsCount: this.fb.control(1),
        name: this.fb.control(null as string, Validators.required),
      }),
      ingredients: new FormArray<AddFoodIngredientForm>([]),
      measurements: new FormArray<AddFoodMeasurementForm>([]),
    })

    this.translateService.get('add-food.default-portion-name')
      .pipe(take(1))
      .subscribe(defaultPortionName => {
        this.form.patchValue({portions: {name: defaultPortionName}}, {emitEvent: false})
      })
  }

  private recalculateUsedIngredients(ingredients: IFood[]) {
    this.usedIngredientsIds$.next(ingredients.map(i => i?.id).filter(id => id != null))
  }
}
