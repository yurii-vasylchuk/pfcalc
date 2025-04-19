import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnInit,
  TemplateRef,
  TrackByFunction,
  ViewChild,
} from '@angular/core'
import {NutritionGaugeComponent} from '../../components/nutrition-gauge/nutrition-gauge.component'
import {
  defaultMeasurement,
  IMeal,
  IMeasurement,
  IProfile,
  WeeklyNutrientsType,
  WeeklyNutrientsTypes,
} from '../../commons/models/domain.models'
import {Observable, takeUntil} from 'rxjs'
import {CommonModule} from '@angular/common'
import {IPfcc} from '../../commons/models/common.models'
import {DateTime} from 'luxon'
import {TranslateModule} from '@ngx-translate/core'
import * as fromFunctions from '../../commons/functions'
import * as fromRoutes from '../../commons/routes'
import {dashboard} from '../../commons/routes'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import {MatLineModule} from '@angular/material/core'
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot'
import {DashboardState} from './dashboard.state'
import {RouterLink} from '@angular/router'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {Dashboard} from './dashboard.state-models'
import {MatTooltipModule} from '@angular/material/tooltip'
import {AlertService} from '../../service/alert.service'
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'

type EditMealForm = FormGroup<{
  meal: FormControl<IMeal>
  weight: FormControl<number>
  measurement: FormControl<IMeasurement>
}>

@Component({
  selector: 'pfc-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NutritionGaugeComponent, MatButtonModule, MatListModule, TranslateModule, MatIconModule, MatDialogModule, MatLineModule, RouterLink, MatTooltipModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
})
export class DashboardPageComponent implements OnInit {

  protected profile$: Observable<IProfile>

  protected readonly fromFunctions = fromFunctions
  protected readonly fromRoutes = fromRoutes
  protected readonly weeklyNutrientsTypeOptions = WeeklyNutrientsTypes
  protected readonly dashboard = dashboard

  onWeeklyNutrientsTypeChange(value: WeeklyNutrientsType) {
    this.changeWeeklyNutrientsType.emit(value)
  }

  @ViewChild('editMeal', {static: true})
  protected editMealTemplate: TemplateRef<any>

  protected editMealForm: EditMealForm

  @ViewSelectSnapshot(DashboardState.measurements)
  protected measurements: Map<number, IMeasurement[]>
  @ViewSelectSnapshot(DashboardState.todayNutrients)
  protected dailyNutrients: IPfcc
  @ViewSelectSnapshot(DashboardState.weeklyNutrients)
  protected weeklyNutrients: IPfcc
  @ViewSelectSnapshot(DashboardState.dailyAims)
  protected dailyAims: IPfcc
  @ViewSelectSnapshot(DashboardState.weeklyAims)
  protected weeklyAims: IPfcc
  @ViewSelectSnapshot(DashboardState.todayMeals)
  protected eatenMeals: IMeal[]
  @ViewSelectSnapshot(DashboardState.currentDate)
  protected currentDate: DateTime
  @ViewSelectSnapshot(DashboardState.weeklyCountingDays)
  protected countedDaysOnWeek: number
  @ViewSelectSnapshot(DashboardState)
  protected state: Dashboard.IDashboardState

  @Emitter(DashboardState.removeMeal)
  private removeMealEmt: Emittable<Dashboard.RemoveMealPayload>
  @Emitter(DashboardState.switchDate)
  private switchDateEmt: Emittable<Dashboard.SwitchDatePayload>
  @Emitter(DashboardState.switchWeeklyNutrientsType)
  private changeWeeklyNutrientsType: Emittable<Dashboard.SwitchWeeklyNutrientsTypePayload>
  @Emitter(DashboardState.editMeal)
  private editMeal: Emittable<Dashboard.EditMealPayload>
  @Emitter(DashboardState.prepareMealEdit)
  private prepareMealEdit: EventEmitter<Dashboard.PrepareMealEditPayload>

  private alertService = inject(AlertService)
  private dialogService = inject(MatDialog)
  private fb = inject(FormBuilder)

  constructor() {
    this.editMealForm = this.fb.group({
      meal: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
      measurement: new FormControl(defaultMeasurement, Validators.required),
    })
  }

  protected get isEditingFood(): boolean {
    return this.editMealForm.value.meal.dishId == null
  }

  protected get editMealMeasurements(): IMeasurement[] {
    if (!this.isEditingFood) {
      return [defaultMeasurement]
    }

    return [
      defaultMeasurement,
      ...(this.measurements.get(this.editMealForm.value?.meal.foodId ?? -999) ?? []),
    ]
  }

  ngOnInit() {
  }

  showCountedDaysOnWeekInfo() {
    this.alertService.info('dashboard.counted-days-on-week-info')
  }

  protected readonly measurementTrackByFn: TrackByFunction<IMeasurement> = (_, m) => m.id

  protected removeMeal(mealId: number) {
    this.removeMealEmt.emit({id: mealId})
  }

  protected handleNextDateClick() {
    this.switchDateEmt.emit({date: this.currentDate.plus({day: 1})})
  }

  protected handlePrevDateClick() {
    this.switchDateEmt.emit({date: this.currentDate.minus({day: 1})})
  }

  protected handleEditMealClick(meal: IMeal) {
    this.editMealForm.patchValue({
      meal: {...meal},
      weight: meal.weight,
      measurement: defaultMeasurement,
    })

    this.prepareMealEdit.emit(meal)

    const dialogRef = this.dialogService.open<any, void, boolean>(this.editMealTemplate)

    this.editMealForm.controls.measurement.valueChanges.pipe(
      takeUntil(dialogRef.afterClosed()),
    ).subscribe(measurement => {
      this.editMealForm.patchValue({
        weight: measurement.defaultValue,
      })
    })

    dialogRef.afterClosed().subscribe(shouldSave => {
      if (!shouldSave) {
        return
      }
      if (this.editMealForm.invalid) {
        this.alertService.warn(`Can't save: data is invalid.`)
        return
      }

      const formValue = this.editMealForm.value
      const newWeight = formValue.weight * formValue.measurement.toGramMultiplier
      if (newWeight == meal.weight) {
        return
      }

      const editedMeal: IMeal = {
        ...formValue.meal,
        weight: newWeight,
      }

      this.editMeal.emit(editedMeal)
    })
  }

  protected readonly mealTrackBy = (idx: number, item: IMeal) => item.id
}
