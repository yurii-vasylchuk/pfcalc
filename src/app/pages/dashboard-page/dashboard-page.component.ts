import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NutritionGaugeComponent} from '../../components/nutrition-gauge/nutrition-gauge.component';
import {Store} from '@ngxs/store';
import {DomainState} from '../../state/domain/domain.state';
import {IDish, IFood, IMeal, IProfile} from '../../commons/models/domain.models';
import {BehaviorSubject, combineLatest, debounceTime, filter, map, Observable, take} from 'rxjs';
import {AsyncPipe, CommonModule} from '@angular/common';
import {emptyPfcc, IPfcc} from '../../commons/models/common.models';
import {DateTime} from 'luxon';
import {TranslateModule} from '@ngx-translate/core';
import * as fromFunctions from '../../commons/functions';
import {ceilPfcc, isDefined} from '../../commons/functions';
import {MatIconModule} from '@angular/material/icon';
import {
  AddMealAction,
  DeleteDishAction,
  LoadFoodsListAction,
  RemoveMealAction,
} from '../../state/domain/domain.state-models';
import {
  AddMealComponent,
  AddMealDialogData,
  IMealOption,
  ISelectedDish,
} from '../../components/add-meal/add-meal.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatLineModule} from "@angular/material/core";

@Component({
  selector: 'pfc-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NutritionGaugeComponent, AsyncPipe, MatButtonModule, MatListModule, TranslateModule, MatIconModule, MatDialogModule, MatLineModule],
})
export class DashboardPageComponent {

  protected readonly fromFunctions = fromFunctions;

  profile$: Observable<IProfile>;

  dailyNutrients$: Observable<IPfcc>;
  weeklyNutrients$: Observable<IPfcc>;

  dailyAims$: Observable<IPfcc>;
  weeklyAims$: Observable<IPfcc>;

  eatenMeals$: Observable<IMeal[]>;

  constructor(private store: Store, private dialog: MatDialog) {
    const weekday = DateTime.now().weekday;

    this.profile$ = this.store.select(DomainState.profile)
      .pipe(
        filter(p => p != null),
      ) as Observable<IProfile>;

    this.dailyAims$ = this.store.select(DomainState.profile).pipe(
      filter(p => p != null),
      map(p => p?.aims || emptyPfcc),
    ) as Observable<IPfcc>;
    this.weeklyAims$ = this.dailyAims$.pipe(
      map(aims => {
        return {
          protein: (aims.protein || 0) * weekday,
          fat: (aims.fat || 0) * weekday,
          carbohydrates: (aims.carbohydrates || 0) * weekday,
          calories: (aims.calories || 0) * weekday,
        };
      }),
    ) as Observable<IPfcc>;


    this.weeklyNutrients$ = this.store.select(DomainState.weeklyNutrients)
      .pipe(
        filter(isDefined),
        map(ceilPfcc),
      );
    this.dailyNutrients$ = this.store.select(DomainState.todayNutrients)
      .pipe(
        filter(isDefined),
        map(ceilPfcc),
      );

    this.eatenMeals$ = this.store.select(DomainState.todayMeals);
  }

  mealTrackBy = (idx: number, item: IMeal) => item.id;

  removeMeal(mealId: number) {
    this.store.dispatch(new RemoveMealAction(mealId));
  }

  addMeal() {
    this.store.dispatch(new LoadFoodsListAction());

    const filter$ = new BehaviorSubject<string | null>(null);

    const allDishOptions$ = new BehaviorSubject<IMealOption[]>([]);
    combineLatest([
      this.store.select(DomainState.dishes),
      this.store.select(DomainState.foods),
    ]).pipe(
      map(([dishes, foods]): IMealOption[] => {
        return [
          ...this.mealOptionFromDishes(dishes),
          ...this.mealOptionsFromFoods(foods),
        ];
      }),
    ).subscribe(options => allDishOptions$.next(options));

    const ref = this.dialog.open<AddMealComponent, AddMealDialogData, ISelectedDish>(AddMealComponent, {
      panelClass: 'fullscreen-dialog',

      data: {
        filter: val => filter$.next(val),
        dailyNutrients$: this.dailyNutrients$,
        dailyAims$: this.dailyAims$,
        items: allDishOptions$,
      },
    });

    filter$.pipe(
      debounceTime(200),
    ).subscribe(value => this.store.dispatch(new LoadFoodsListAction(20, value)));

    combineLatest([
      allDishOptions$,
      ref.afterClosed(),
    ]).pipe(
      map(([options, selected]) => {
        if (selected == null) {
          return null;
        }

        const selectedOption: IMealOption = options.find(o => o.id === selected.id) as IMealOption;

        if (selectedOption == null) {
          return null;
        }

        return {
          id: null,
          eatenOn: DateTime.now(),
          pfcc: selectedOption.pfcc,
          foodId: selectedOption.foodId,
          dishId: selectedOption.type === 'dish' ? selectedOption.dishId : null,
          weight: selected.weight,
        } as IMeal;
      }),
      take(1),
    ).subscribe(newMeal => {
      allDishOptions$.complete();

      if (newMeal != null) {
        this.store.dispatch(new AddMealAction(newMeal));
      }
    });

  }

  private mealOptionsFromFoods(foods: IFood[]): IMealOption[] {
    if (foods == null) {
      return [];
    }
    return foods.map(food => {
      return {
        id: `food-${food.id}`,
        foodId: food.id,
        name: food.name,
        pfcc: food.pfcc,
        type: food.type,
      };
    });
  }

  private mealOptionFromDishes(dishes: IDish[]): IMealOption[] {
    if (dishes == null) {
      return [];
    }
    return dishes.filter(d => !d.deleted)
      .map(dish => {
        const item: IMealOption = {
          id: `dish-${dish.id}`,
          foodId: dish.foodId,
          dishId: dish.id,
          name: dish.name,
          type: 'dish',
          pfcc: ceilPfcc(dish.pfcc, 1),
          delete: () => {
            this.store.dispatch(new DeleteDishAction(dish.id));
          },
        };
        return item;
      });
  }
}
