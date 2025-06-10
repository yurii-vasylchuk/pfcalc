import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  TrackByFunction,
  viewChild,
} from '@angular/core'
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
import {
  BehaviorSubject,
  combineLatestWith,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  ReplaySubject,
} from 'rxjs'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {MatIconModule} from '@angular/material/icon'
import {NutritionGaugeComponent} from '../../components/nutrition-gauge/nutrition-gauge.component'
import {ProfileState} from '../../state/profile.state'
import {emptyPfcc, IPfcc} from '../../commons/models/common.models'
import {ceilPfcc, multiplyPfcc} from '../../commons/functions'
import {MatSelectModule} from '@angular/material/select'
import {defaultMeasurement, IMeasurement} from '../../commons/models/domain.models'
import {Select, Store} from '@ngxs/store'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {DialogPageHeadingComponent} from '../../components/dialog-page-heading/dialog-page-heading.component'
import {DateTime} from 'luxon'
import IMealOption = AddMeal.IMealOption

@Component({
  selector: 'pfc-add-meal',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, TranslateModule, ReactiveFormsModule, MatIconModule, NutritionGaugeComponent, MatSelectModule, MatProgressSpinnerModule, MatProgressBarModule, DialogPageHeadingComponent],
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMealComponent implements OnInit, OnDestroy {
  private store = inject(Store)

  private static readonly PAGE_SIZE = 16
  protected readonly ceilPfcc = ceilPfcc

  protected measurements: IMeasurement[] = [
    defaultMeasurement,
  ]

  @Select(hasActionsExecuting([{type: AddMeal.LOAD_MEAL_OPTIONS}, {type: AddMeal.LOAD_MORE_MEAL_OPTIONS}]))
  protected loading$: Observable<boolean>
  @Select(AddMealState.moreDataAvailable)
  protected moreDataAvailable$: Observable<boolean>

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
  @Emitter(AddMealState.loadMoreMealOptions)
  protected loadMore: Emittable<void>
  @Emitter(AddMealState.saveMeal)
  protected saveMeal: Emittable<AddMeal.SaveMealPayload>

  protected filterFC = new FormControl<string>(null)
  protected weightFC = new FormControl<number>(100)
  protected measurementFC = new FormControl<IMeasurement>(defaultMeasurement)
  protected selectedOption$ = new ReplaySubject<AddMeal.IMealOption>()
  protected addedPfcc$ = new ReplaySubject<IPfcc>()
  private readonly endIndicator = viewChild('endIndicator', {read: (ElementRef<HTMLDivElement>)})
  private endIntersectionObserver: IntersectionObserver
  private isAccordionScrolledToEnd$ = new BehaviorSubject<boolean>(false)

  constructor() {
    this.endIntersectionObserver = new IntersectionObserver((entries) => this.onEndIntersected(entries[0]), {
      threshold: 0.5,
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

    this.measurementFC.valueChanges.subscribe(m => {
      this.weightFC.patchValue(m.defaultValue)
    })

    this.selectedOption$.pipe(
      combineLatestWith(this.weightFC.valueChanges, this.measurementFC.valueChanges),
      map(([opt, weight, measurement]) => {
        if (opt?.pfcc == null || weight == null || measurement == null) {
          return emptyPfcc
        }
        return multiplyPfcc(opt.pfcc, weight * measurement.toGramMultiplier / 100)
      }),
    ).subscribe(next => this.addedPfcc$.next(next))

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

  handleOptionOpened(option: AddMeal.IMealOption) {
    this.selectedOption$.next(option)
    this.weightFC.patchValue(100)
    this.measurementFC.patchValue(this.measurements[0])
    this.measurements = [
      defaultMeasurement,
      ...(option.measurements ?? []),
    ]
  }

  handleEditIngredientsClick(option: AddMeal.IMealOption) {
    console.log('Currently unsupported')
  }

  handleWeightInputFocus($event: FocusEvent) {
    ($event.target as HTMLInputElement).select()
  }

  handleSaveMealClick(option: AddMeal.IMealOption) {
    const measurement = this.measurementFC.value
    const now = DateTime.now()
    this.saveMeal.emit({
      pfcc: option.pfcc,
      weight: measurement.toGramMultiplier * this.weightFC.value,
      name: option.name,
      foodId: option.foodId,
      eatenOn: this.date.set({
        hour: now.hour,
        minute: now.minute,
        second: now.second,
        millisecond: now.millisecond,
      }),
    })
  }

  protected optionTrackBy: TrackByFunction<AddMeal.IMealOption> = (_, opt) => `${opt.type.substring(0, 1)}-${opt.foodId ?? '_'}`

  private onEndIntersected(entry: IntersectionObserverEntry) {
    this.isAccordionScrolledToEnd$.next(entry.isIntersecting)
  }
}
