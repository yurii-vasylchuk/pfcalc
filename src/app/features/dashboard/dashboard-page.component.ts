import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {NutritionGaugeComponent} from '../../components/nutrition-gauge/nutrition-gauge.component'
import {
  IMeal,
  IMealIngredient,
  IProfile,
  WeeklyNutrientsType,
  WeeklyNutrientsTypes,
} from '../../commons/models/domain.models'
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
import {ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {Store} from '@ngxs/store'
import {
  EditMealDialogComponent,
  EditMealDialogParams,
  EditMealDialogResult,
} from '../dialogs/edit-meal-dialog/edit-meal-dialog.component'

@Component({
  selector: 'pfc-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NutritionGaugeComponent, MatButtonModule, MatListModule, TranslateModule, MatIconModule, MatDialogModule, MatLineModule, RouterLink, MatTooltipModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
})
export class DashboardPageComponent implements OnInit {

  protected store = inject(Store)
  @ViewSelectSnapshot(DashboardState.editIngredientsGroups)
  protected editIngredientsGroups: IMealIngredient[][]
  private alertService = inject(AlertService)

  protected profile$: Observable<IProfile>

  protected readonly fromFunctions = fromFunctions
  protected readonly fromRoutes = fromRoutes
  protected readonly weeklyNutrientsTypeOptions = WeeklyNutrientsTypes

  @ViewSelectSnapshot(DashboardState.todayNutrients)
  protected dailyNutrients: IPfcc
  @ViewSelectSnapshot(DashboardState.weeklyNutrients)
  protected weeklyNutrients: IPfcc
  @ViewSelectSnapshot(DashboardState.weeklyAims)
  protected weeklyAims: IPfcc
  @ViewSelectSnapshot(DashboardState.todayMeals)
  protected eatenMeals: IMeal[]
  @ViewSelectSnapshot(DashboardState.currentDate)
  protected currentDate: DateTime
  @ViewSelectSnapshot(DashboardState.weeklyCountingDays)
  protected countedDaysOnWeek: number
  private dialogService = inject(MatDialog)
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

  onWeeklyNutrientsTypeChange(value: WeeklyNutrientsType) {
    this.changeWeeklyNutrientsType.emit(value)
  }

  ngOnInit() {
  }

  showCountedDaysOnWeekInfo() {
    this.alertService.info('dashboard.counted-days-on-week-info')
  }

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
    const dialogRef = this.dialogService.open<EditMealDialogComponent, EditMealDialogParams, EditMealDialogResult>(EditMealDialogComponent, {
      data: {meal},
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result == null) {
        return
      }

      const editedMeal: IMeal = (result.ingredients == null || result.ingredients.length === 0) ? {
        ...meal,
        weight: result.weight,
      } : {
        ...meal,
        ingredients: result.ingredients,
      }

      this.editMeal.emit(editedMeal)
    })
  }
}
