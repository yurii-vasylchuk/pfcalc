import {ChangeDetectionStrategy, Component, EventEmitter, inject, OnDestroy, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {DialogPageHeadingComponent} from '../../components/dialog-page-heading/dialog-page-heading.component'
import {calcWeight, ceilPfcc, multiplyPfcc, sumPfccs, withDefaults} from '../../commons/functions'
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
import {defaultMeasurement, IFood, IFoodIngredient, IMeasurement} from '../../commons/models/domain.models'
import {Store} from '@ngxs/store'
import {AddFoodState} from './add-food.state'
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot'
import {debounceTime, filter, map, skipWhile, Subject, take, takeUntil} from 'rxjs'
import {emptyPfcc, FormGroupValue, IPfcc} from '../../commons/models/common.models'
import {Emitter} from '@ngxs-labs/emitter'
import {AddFood} from './add-food.state-models'
import {TranslateModule, TranslateService} from '@ngx-translate/core'
import {MatCheckbox} from '@angular/material/checkbox'
import {hasActionsExecuting} from '@ngxs-labs/actions-executing'

type FoodIngredientForm = FormGroup<{
  ingredient: FormControl<IFoodIngredient>;
  measurement: FormControl<IMeasurement>;
  weight: FormControl<number>;
  index: FormControl<number>;
}>;

type AddFoodIngredientGroupForm = FormGroup<{
  ingredientSearch: FormControl<string>;
  ingredients: FormArray<FoodIngredientForm>;
  selectedOption: FormControl<number>;
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
  ownedByUser: FormControl<boolean>;
  pfcc: FormGroup<{ [p in keyof IPfcc]: FormControl<IPfcc[p]> }>;
  portions: AddPortionsForm;
  ingredientGroups: FormArray<AddFoodIngredientGroupForm>;
  measurements: FormArray<AddFoodMeasurementForm>;
};

@Component({
  selector: 'pfc-add-food',
  imports: [
    CommonModule, DialogPageHeadingComponent, FormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, NgxMatSelectSearchModule, ReactiveFormsModule, TranslateModule, MatCheckbox,
  ],
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFoodComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder)
  private store = inject(Store)
  private translateService = inject(TranslateService)

  private static readonly CREATE_TITLE = 'add-food.title-create'
  private static readonly EDIT_TITLE = 'add-food.title-edit'

  protected readonly ceilPfcc = ceilPfcc
  protected readonly multiplyPfcc = multiplyPfcc
  protected readonly defaultMeasurement = defaultMeasurement
  protected readonly emptyPfcc = emptyPfcc

  @ViewSelectSnapshot(AddFoodState.ingredients)
  protected ingredientsOptions: IFood[][]
  protected savingFood$ = this.store.select(hasActionsExecuting([{type: AddFood.SAVE_FOOD_ACTION}]))
  protected title = AddFoodComponent.CREATE_TITLE
  @Emitter(AddFoodState.reloadIngredientOptions)
  private reloadIngredientOptions: EventEmitter<AddFood.ReloadIngredientOptionsPayload>
  @Emitter(AddFoodState.dropMeasurements)
  private dropMeasurements: EventEmitter<number[]>
  protected form: FormGroup<AddFoodForm>
  @Emitter(AddFoodState.saveFood)
  private saveFood: EventEmitter<AddFood.SaveFoodPayload>

  private nextIngredientIndex = 1
  private nextMeasurementIndex = 1
  private nextIngredientGroupIndex = 1
  private $destroy = new Subject<void>()

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

    return this.form.value.ingredientGroups
      .filter(g => g.selectedOption >= 0)
      .map(i => i.ingredients[i.selectedOption].weight * i.ingredients[i.selectedOption].measurement.toGramMultiplier)
      .reduce((w1, w2) => w1 + w2, 0)
  }

  ngOnDestroy() {
    this.$destroy.next(null)
    this.$destroy.complete()
  }

  ngOnInit(): void {
    this.createForm()

    this.form.valueChanges.pipe(
      filter(form => form.isRecipe),
      map(form => form.ingredientGroups
        .map(i => i.ingredients[i.selectedOption])
        .filter(i => i?.ingredient != null)),
    ).subscribe(ingredients => {
      this.form.patchValue({
        pfcc: sumPfccs(...ingredients.map(i => multiplyPfcc(i.ingredient.pfcc, (i.weight * i.measurement.toGramMultiplier) / 100))),
      }, {emitEvent: false})
    })

    this.form.controls.ingredientGroups.valueChanges.pipe(
      takeUntil(this.$destroy),
      debounceTime(100),
      map(ingredients => ingredients.map(i => ({
        searchString: i.ingredientSearch,
        selectedIngredient: i.ingredients[i.selectedOption]?.ingredient,
      }))),
    ).subscribe(this.reloadIngredientOptions.emit)

    this.initializeFormData()
  }

  protected compareIngredientsFn = (ing1: any, ing2: any) => ing1?.id === ing2?.id

  protected compareMeasurementsFn: (m1: IMeasurement, m2: IMeasurement) => boolean = (m1, m2) => m1.id === m2.id

  protected handleDeleteMeasurement(idx: number) {
    this.form.controls.measurements.at(idx).patchValue({
      deleted: true,
    })
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

  protected handleRemoveIngredientGroupClick(idx: number) {
    this.form.controls.ingredientGroups.removeAt(idx)
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

  protected handleAddIngredientGroupClick() {
    const ingredientFG = this.fb.group({
      ingredient: this.fb.control(null as IFoodIngredient),
      measurement: this.fb.control(defaultMeasurement),
      weight: this.fb.control(100),
      index: this.fb.control(this.nextIngredientIndex++),
    })
    const ingredientGroupFG: AddFoodIngredientGroupForm = this.fb.group({
      ingredientSearch: this.fb.control(''),
      ingredients: this.fb.array<FoodIngredientForm>([
        ingredientFG,
      ]),
      selectedOption: this.fb.control(0),
      index: this.fb.control(this.nextIngredientGroupIndex++),
    })

    ingredientFG.controls.measurement.valueChanges
      .subscribe(m => ingredientFG.patchValue({
        weight: m.defaultValue,
      }))

    ingredientFG.controls.ingredient.valueChanges
      .subscribe(_ => ingredientFG.controls.measurement.setValue(defaultMeasurement))

    this.form.controls.ingredientGroups.push(ingredientGroupFG)
  }

  protected handleRecipeSwitcherChanged(data: MatSlideToggleChange) {
    if (data.checked) {
      this.form.controls.pfcc.setValue(emptyPfcc)
    } else {
      this.form.controls.ingredientGroups.clear()
    }
  }

  protected handleSelectPreviousIngredientInGroupClick(groupIdx: number) {
    const group = this.form.value.ingredientGroups[groupIdx]

    if (group.selectedOption >= 1) {
      this.form.controls.ingredientGroups.at(groupIdx).patchValue({
        selectedOption: group.selectedOption - 1,
      })
    }
  }

  protected handleSelectNextIngredientInGroupClick(groupIdx: number) {
    const group = this.form.value.ingredientGroups[groupIdx]

    if (group.ingredients.length > (group.selectedOption + 1)) {
      this.form.controls.ingredientGroups.at(groupIdx).patchValue({
        selectedOption: group.selectedOption + 1,
      })
    }
  }

  protected handleMakeIngredientDefaultClick(groupIdx: number) {
    const group = this.form.controls.ingredientGroups.at(groupIdx)
    const currentIngredientIndex = group.value.selectedOption
    const ingredients = group.controls.ingredients
    const ingredient = ingredients.at(currentIngredientIndex)

    ingredients.removeAt(currentIngredientIndex)
    ingredients.insert(0, ingredient)

    group.patchValue({
      selectedOption: 0,
    })
  }

  protected handleAddIngredientToGroupClick(groupIdx: number) {
    const group = this.form.controls.ingredientGroups.at(groupIdx)
    const ingredientFG = this.fb.group({
      ingredient: this.fb.control(null as IFoodIngredient),
      measurement: this.fb.control(defaultMeasurement),
      weight: this.fb.control(100),
      index: this.fb.control(this.nextIngredientIndex++),
    })
    group.controls.ingredients.push(ingredientFG)
    ingredientFG.controls.measurement.valueChanges
      .subscribe(m => ingredientFG.patchValue({
        weight: m.defaultValue,
      }))

    ingredientFG.controls.ingredient.valueChanges
      .subscribe(_ => ingredientFG.controls.measurement.setValue(defaultMeasurement))

    group.patchValue({
      selectedOption: group.value.selectedOption + 1,
    })
  }

  protected handleRemoveIngredientFromGroupClick(groupIdx: number, ingredientIdx: number) {
    const group = this.form.controls.ingredientGroups.at(groupIdx)

    if (!(ingredientIdx == 0 && group.value.ingredients.length > 1)) {
      group.patchValue({
        selectedOption: ingredientIdx - 1,
      })
    }

    group.controls.ingredients.removeAt(ingredientIdx)
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
        toGramMultiplier: f.ingredientGroups
          .map(i => i.ingredients[0].weight * i.ingredients[0].measurement.toGramMultiplier).reduce((a, b) => a + b) / f.portions.portionsCount,
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
      ingredients: !f.isRecipe ? null : f.ingredientGroups.flatMap<IFoodIngredient>((ig, groupIndex) => ig.ingredients.map((i, ingredientIndex) => ({
          ...i.ingredient,
          ingredientIndex: groupIndex,
          ingredientWeight: calcWeight(i.weight, i.measurement),
          isDefault: ingredientIndex == 0,
        })),
      ),
      measurements,
    }

    this.saveFood.emit(foodToSave)
    this.dropMeasurements.emit(measurementsToDelete)
  }

  private initializeFormData() {
    this.store.select(AddFoodState.initializationVector)
      .pipe(
        skipWhile(food => food == null),
        takeUntil(this.$destroy),
        take(1),
      )
      .subscribe(food => {
        if (food?.id == null) {
          this.form.patchValue({
            name: food.name,
            isRecipe: food?.type === 'RECIPE',
          })
        } else {
          this.title = AddFoodComponent.EDIT_TITLE
          this.form.controls.ingredientGroups.clear()

          food.measurements?.forEach(_ => this.handleAddMeasurementClick())

          const ingredientGroups: Map<number, IFoodIngredient[]> = (food.ingredients ?? []).reduce((map, ing) => {
            let group = map.get(ing.ingredientIndex)
            if (group == null) {
              group = []
              map.set(ing.ingredientIndex, group)
            }
            group.push(ing)
            return map
          }, new Map<number, IFoodIngredient[]>)

          ingredientGroups.forEach(_ => this.handleAddIngredientGroupClick())

          let formIngredientGroups: FormGroupValue<AddFoodIngredientGroupForm>[] = []
          ingredientGroups.forEach((ingredients, groupIdx) => {
            for (let i = 1; i < ingredients.length; i++) {
              this.handleAddIngredientToGroupClick(groupIdx)
            }

            formIngredientGroups.push({
              ingredientSearch: '',
              ingredients: ingredients
                .sort((a, b) => (a.isDefault ? 0 : 1) - (b.isDefault ? 0 : 1))
                .map(i => ({
                  ingredient: i,
                  measurement: i.measurements?.find(m => m.id === i.ingredientWeight.measurementId) ?? defaultMeasurement,
                  weight: i.ingredientWeight.measurementId == null ? i.ingredientWeight.inGram : i.ingredientWeight.measurementCount,
                  index: this.nextIngredientIndex++,
                })),
              selectedOption: ingredients?.length > 0 ? 0 : null,
              index: groupIdx,
            })
          })

          const foodMeasurements = (food.measurements ?? []).map(m => ({
            id: m.id,
            name: m.name,
            multiplier: m.toGramMultiplier,
            defaultValue: m.defaultValue,
            index: this.nextMeasurementIndex++,
          }))

          const id = food.ownedByUser ? food.id : null

          if (!food.ownedByUser) {
            this.form.controls.hidden.disable()
          }

          this.form.patchValue({
            id,
            ownedByUser: food.ownedByUser,
            name: food.name,
            description: food.description,
            isRecipe: food.type === 'RECIPE',
            hidden: food.ownedByUser ? food.hidden : true,
            portions: {
              enabled: false,
            },
            pfcc: {
              protein: food.pfcc?.protein,
              fat: food.pfcc?.fat,
              carbohydrates: food.pfcc?.carbohydrates,
              calories: food.pfcc?.calories,
            },
            ingredientGroups: formIngredientGroups,
            measurements: foodMeasurements,
          })
        }
      })
  }

  private createForm() {
    this.form = this.fb.group<AddFoodForm>({
      id: this.fb.control(null as number),
      ownedByUser: this.fb.control(true),
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
      ingredientGroups: new FormArray<AddFoodIngredientGroupForm>([]),
      measurements: new FormArray<AddFoodMeasurementForm>([]),
    })

    this.translateService.get('add-food.default-portion-name')
      .pipe(take(1))
      .subscribe(defaultPortionName => {
        this.form.patchValue({portions: {name: defaultPortionName}}, {emitEvent: false})
      })
  }
}
