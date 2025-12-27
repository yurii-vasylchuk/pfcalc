import {ChangeDetectionStrategy, Component, ElementRef, inject, OnDestroy, OnInit, viewChild} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatExpansionModule} from '@angular/material/expansion'
import {TranslateModule} from '@ngx-translate/core'
import {hasActionsExecuting} from '@ngxs-labs/actions-executing'
import {AddMeal} from './add-meal.state-models'
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot'
import {AddMealState} from './add-meal.state'
import {FormControl, ReactiveFormsModule} from '@angular/forms'
import {BehaviorSubject, combineLatestWith, debounceTime, distinctUntilChanged, Observable, ReplaySubject} from 'rxjs'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {MatIconModule} from '@angular/material/icon'
import {NutritionGaugeComponent} from '../../components/nutrition-gauge/nutrition-gauge.component'
import {ProfileState} from '../../state/profile.state'
import {emptyPfcc, IPfcc} from '../../commons/models/common.models'
import {ceilPfcc, multiplyPfcc, sumPfccs} from '../../commons/functions'
import {MatSelectModule} from '@angular/material/select'
import {
  defaultMeasurement,
  IFoodIngredient,
  IMealIngredient,
  IMeasurement,
  IWeight,
} from '../../commons/models/domain.models'
import {Store} from '@ngxs/store'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {DialogPageHeadingComponent} from '../../components/dialog-page-heading/dialog-page-heading.component'
import {DateTime} from 'luxon'
import {animate, style, transition, trigger} from '@angular/animations'
import {WeightInputComponent} from '../../components/weight-input/weight-input.component'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {
  IngredientsEditFormComponent,
  MealIngredientConfig,
} from '../../components/ingredients-edit-form/ingredients-edit-form.component'
import IMealOption = AddMeal.IMealOption
import SaveMealPayload = AddMeal.SaveMealPayload

@Component({
  selector: 'pfc-add-meal',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, TranslateModule, ReactiveFormsModule, MatIconModule, NutritionGaugeComponent, MatSelectModule, MatProgressSpinnerModule, MatProgressBarModule, DialogPageHeadingComponent, WeightInputComponent, IngredientsEditFormComponent],
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(110vW)'}),
        animate('400ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          style({opacity: 1, transform: 'translateX(0vW)'}),
        ),
      ]),
      transition(':leave', [
        animate('350ms cubic-bezier(0.4, 0.0, 1, 1)',
          style({opacity: 0, transform: 'translateX(-110vW)'}),
        ),
      ]),
    ]),
  ],
})
export class AddMealComponent implements OnInit, OnDestroy {
  private store = inject(Store)

  private static readonly PAGE_SIZE = 16
  protected loading$: Observable<boolean> = this.store.select(hasActionsExecuting([{type: AddMeal.LOAD_MEAL_OPTIONS}, {type: AddMeal.LOAD_MORE_MEAL_OPTIONS}]))

  protected readonly ceilPfcc = ceilPfcc
  protected measurements: IMeasurement[] = [
    defaultMeasurement,
  ]
  protected moreDataAvailable$: Observable<boolean> = this.store.select(AddMealState.moreDataAvailable)
  @Emitter(AddMealState.loadMoreMealOptions)
  protected loadMore: Emittable

  @ViewSelectSnapshot(AddMealState.options)
  protected options: IMealOption[]
  @ViewSelectSnapshot(AddMealState.nutrients)
  protected nutrients: IPfcc
  @ViewSelectSnapshot(AddMealState.date)
  protected date: DateTime
  @ViewSelectSnapshot(ProfileState.aims)
  protected aims: IPfcc

  @Emitter(AddMealState.loadMealOptions)
  protected loadMealOptions: Emittable<AddMeal.LoadMealOptionsPayload>
  @Emitter(AddMealState.selectOption)
  protected selectOption: Emittable<AddMeal.SelectOptionPayload>
  @Emitter(AddMealState.saveMeal)
  protected saveMeal: Emittable<AddMeal.SaveMealPayload>
  protected addedPfcc$ = new BehaviorSubject<IPfcc>(emptyPfcc)

  protected filterFC = new FormControl<string>(null)
  protected selectedOption$ = new ReplaySubject<AddMeal.IMealOption>()
  protected editingIngredients = false
  protected mealIngredientsConf$ = new BehaviorSubject<MealIngredientConfig[]>(null)
  private readonly defaultWeight: IWeight = {
    inGram: 100,
    measurementId: defaultMeasurement.id,
    measurementName: defaultMeasurement.name,
    measurementCount: 100,
  }
  protected weight$ = new BehaviorSubject<IWeight>(this.defaultWeight)
  private customizedIngredients$ = new BehaviorSubject<IMealIngredient[]>([])

  private readonly endIndicator = viewChild('endIndicator', {read: (ElementRef<HTMLDivElement>)})
  private endIntersectionObserver: IntersectionObserver
  private isAccordionScrolledToEnd$ = new BehaviorSubject<boolean>(false)

  constructor() {
    this.endIntersectionObserver = new IntersectionObserver((entries) => this.onEndIntersected(entries[0]), {
      threshold: 0.5,
    })
    this.weight$.pipe(
      takeUntilDestroyed(),
      combineLatestWith(this.selectedOption$),
    ).subscribe(([weight, option]) => {
      const addedPfcc = multiplyPfcc(option.pfcc, weight.inGram / 100)
      this.addedPfcc$.next(addedPfcc)
    })

    this.store.select(AddMealState.optionIngredients).pipe(
      takeUntilDestroyed(),
    ).subscribe((ingredients) => {
      const groups = new Map<number, IFoodIngredient[]>()

      ingredients.forEach(i => {
        let group = groups.get(i.ingredientIndex)

        if (group == null) {
          group = []
          groups.set(i.ingredientIndex, group)
        }

        group.push({
          ...i,
          ingredientWeight: i.ingredientWeight.measurementId != null ?
            i.ingredientWeight :
            {
              inGram: i.ingredientWeight.inGram,
              measurementId: defaultMeasurement.id,
              measurementName: defaultMeasurement.name,
              measurementCount: i.ingredientWeight.inGram,
            },
        })
      })

      this.mealIngredientsConf$.next(
        Array.from(groups.values()).map(options => ({
          options,
          selectedOptionIndex: 0,
          weight: options[0].ingredientWeight,
        })))
    })
  }

  ngOnInit(): void {
    this.loadMealOptions.emit({
      filter: null,
      page: 0,
      pageSize: AddMealComponent.PAGE_SIZE,
    })

    this.filterFC.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged())
      .subscribe(filter => {
        this.loadMealOptions.emit({filter, page: 0, pageSize: AddMealComponent.PAGE_SIZE})
      })

    this.endIntersectionObserver.observe(this.endIndicator().nativeElement)

    this.isAccordionScrolledToEnd$.pipe(
      combineLatestWith(this.loading$.pipe(debounceTime(50)), this.moreDataAvailable$),
    ).subscribe(([scrolledTillEnd, loading, moreDataAvailable]) => {
      if (scrolledTillEnd && !loading && moreDataAvailable) {
        this.loadMore.emit()
      }
    })
  }

  ngOnDestroy(): void {
    this.endIntersectionObserver.unobserve(this.endIndicator().nativeElement)
  }

  protected handleOptionOpened(option: AddMeal.IMealOption) {
    this.selectedOption$.next(option)
    this.editingIngredients = false
    this.measurements = [
      defaultMeasurement,
      ...(option.measurements ?? []),
    ]

    this.selectOption.emit(option.foodId)
    this.weight$.next(this.defaultWeight)
    this.mealIngredientsConf$.next(null)
  }

  protected handleEditIngredientsClick(option: AddMeal.IMealOption) {
    this.editingIngredients = true
  }

  protected handleSaveMealClick(option: AddMeal.IMealOption) {
    const now = DateTime.now()
    const payload: SaveMealPayload = {
      pfcc: option.pfcc,
      name: option.name,
      foodId: option.foodId,
      eatenOn: this.date.set({
        hour: now.hour,
        minute: now.minute,
        second: now.second,
        millisecond: now.millisecond,
      }),
    }

    if (this.editingIngredients) {
      payload.ingredients = this.customizedIngredients$.value
    } else {
      let weight = this.weight$.value
      if (weight.measurementId === defaultMeasurement.id) {
        weight = {
          inGram: weight.inGram,
          measurementId: null,
          measurementCount: null,
          measurementName: null,
        }
      }
      payload.weight = weight
    }

    this.saveMeal.emit(payload)
  }

  protected handleSimpleWeightChanged(weight: IWeight) {
    this.weight$.next(weight)
  }

  protected handleIngredientsEdited(ingredients: IMealIngredient[]) {
    this.customizedIngredients$.next(ingredients)
    const pfcc = ingredients.map(i => multiplyPfcc(i.pfcc, i.ingredientWeight.inGram / 100)).reduce((a, b) => sumPfccs(a, b), emptyPfcc)
    this.addedPfcc$.next(pfcc)
  }

  private onEndIntersected(entry: IntersectionObserverEntry) {
    this.isAccordionScrolledToEnd$.next(entry.isIntersecting)
  }
}
