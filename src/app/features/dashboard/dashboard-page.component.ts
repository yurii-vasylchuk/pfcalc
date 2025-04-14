import {ChangeDetectionStrategy, Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core'
import {NutritionGaugeComponent} from '../../components/nutrition-gauge/nutrition-gauge.component'
import {IMeal, IProfile} from '../../commons/models/domain.models'
import {Observable} from 'rxjs'
import {CommonModule} from '@angular/common'
import {IPfcc} from '../../commons/models/common.models'
import {DateTime} from 'luxon'
import {TranslateModule} from '@ngx-translate/core'
import * as fromFunctions from '../../commons/functions'
import * as fromRoutes from '../../commons/routes'
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
import {MatSlideToggle} from '@angular/material/slide-toggle'
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatFormField, MatInput} from '@angular/material/input'
import {MatLabel} from '@angular/material/form-field'

type EditMealForm = FormGroup<{
  meal: FormControl<IMeal>
  weight: FormControl<number>
}>

@Component({
  selector: 'pfc-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NutritionGaugeComponent, MatButtonModule, MatListModule, TranslateModule, MatIconModule, MatDialogModule, MatLineModule, RouterLink, MatTooltipModule, MatSlideToggle, ReactiveFormsModule, MatInput, MatFormField, MatLabel],
})
export class DashboardPageComponent implements OnInit {

  protected profile$: Observable<IProfile>
  protected readonly fromFunctions = fromFunctions
  protected readonly fromRoutes = fromRoutes
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
  @ViewChild('editMeal', {static: true})
  protected editMealTemplate: TemplateRef<any>
  protected editMealForm: EditMealForm
  @Emitter(DashboardState.switchWeeklyNutrientsType)
  private changeWeeklyNutrientsType: Emittable<Dashboard.SwitchWeeklyNutrientsTypePayload>
  @Emitter(DashboardState.editMeal)
  private editMeal: Emittable<Dashboard.EditMealPayload>

  private alertService = inject(AlertService)
  private dialogService = inject(MatDialog)
  private fb = inject(FormBuilder)

  ngOnInit() {
    this.editMealForm = this.fb.group({
      meal: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
    })
  }

  protected get weeklyNutrientsLabel(): string {
    switch (this.state.weeklyNutrientsType) {
      case 'TOTAL':
        return 'dashboard.weekly-nutrients.label.total'
      case 'AVERAGE':
        return 'dashboard.weekly-nutrients.label.average'
    }
  }

  showCountedDaysOnWeekInfo() {
    this.alertService.info('dashboard.counted-days-on-week-info')
  }

  onWeeklyNutrientsTypeChange() {
    this.changeWeeklyNutrientsType.emit(this.state.weeklyNutrientsType == 'AVERAGE' ? 'TOTAL' : 'AVERAGE')
  }

  protected mealTrackBy = (idx: number, item: IMeal) => item.id

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
    })
    this.dialogService.open<any, void, boolean>(this.editMealTemplate)
      .afterClosed()
      .subscribe(shouldSave => {
        if (!shouldSave) {
          return
        }
        if (this.editMealForm.invalid) {
          this.alertService.warn(`Can't save: data is invalid.`)
          return
        }

        const formValue = this.editMealForm.value
        if (formValue.weight == meal.weight) {
          return
        }

        const editedMeal: IMeal = {
          ...formValue.meal,
          weight: formValue.weight,
        }

        this.editMeal.emit(editedMeal)
      })
  }
}
