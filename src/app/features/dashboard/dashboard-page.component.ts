import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NutritionGaugeComponent} from '../../components/nutrition-gauge/nutrition-gauge.component';
import {IMeal, IProfile} from '../../commons/models/domain.models';
import {Observable} from 'rxjs';
import {AsyncPipe, CommonModule} from '@angular/common';
import {IPfcc} from '../../commons/models/common.models';
import {DateTime} from 'luxon';
import {TranslateModule} from '@ngx-translate/core';
import * as fromFunctions from '../../commons/functions';
import * as fromRoutes from '../../commons/routes';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatLineModule} from "@angular/material/core";
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot';
import {DashboardState} from './dashboard.state';
import {RouterLink} from '@angular/router';
import {Emittable, Emitter} from '@ngxs-labs/emitter';
import {Dashboard} from './dashboard.state-models';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'pfc-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NutritionGaugeComponent, AsyncPipe, MatButtonModule, MatListModule, TranslateModule, MatIconModule, MatDialogModule, MatLineModule, RouterLink, MatTooltipModule],
})
export class DashboardPageComponent {

  profile$: Observable<IProfile>;
  protected readonly fromFunctions = fromFunctions;
  protected readonly fromRoutes = fromRoutes;
  @ViewSelectSnapshot(DashboardState.todayNutrients)
  protected dailyNutrients: IPfcc;
  @ViewSelectSnapshot(DashboardState.weeklyNutrients)
  protected weeklyNutrients: IPfcc;
  @ViewSelectSnapshot(DashboardState.dailyAims)
  protected dailyAims: IPfcc;
  @ViewSelectSnapshot(DashboardState.weeklyAims)
  protected weeklyAims: IPfcc;
  @ViewSelectSnapshot(DashboardState.todayMeals)
  protected eatenMeals: IMeal[];
  @ViewSelectSnapshot(DashboardState.currentDate)
  protected currentDate: DateTime;
  @ViewSelectSnapshot(DashboardState.weeklyCountingDays)
  protected countedDaysOnWeek: number;
  @Emitter(DashboardState.removeMeal)
  private removeMealEmt: Emittable<Dashboard.RemoveMealPayload>;
  @Emitter(DashboardState.switchDate)
  private switchDateEmt: Emittable<Dashboard.SwitchDatePayload>;

  mealTrackBy = (idx: number, item: IMeal) => item.id;

  removeMeal(mealId: number) {
    this.removeMealEmt.emit({id: mealId});
  }

  protected handleNextDateClick() {
    this.switchDateEmt.emit({date: this.currentDate.plus({day: 1})});
  }

  protected handlePrevDateClick() {
    this.switchDateEmt.emit({date: this.currentDate.minus({day: 1})});
  }
}
