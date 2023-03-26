import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {NutritionGaugeComponent} from '../../components/nutrition-gauge/nutrition-gauge.component';
import {Store} from '@ngxs/store';
import {DomainState} from '../../state/domain/domain.state';
import {IDish, IFood, IMeal, IProfile} from '../../commons/models/domain.models';
import {BehaviorSubject, combineLatest, combineLatestWith, filter, map, Observable} from 'rxjs';
import {AsyncPipe, CommonModule} from '@angular/common';
import {emptyPfcc, IPfcc} from '../../commons/models/common.models';
import {MatButtonModule} from '@angular/material/button';
import {DateTime} from 'luxon';
import {MatListModule} from '@angular/material/list';
import {TranslateModule} from '@ngx-translate/core';
import {ceilPfcc, multiplyPfcc} from '../../commons/functions';
import {MatIconModule} from '@angular/material/icon';
import {DeleteDishAction, RemoveMealAction} from '../../state/domain/domain.state-models';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {
  AddMealComponent,
  AddMealDialogData,
  DishOptionType,
  IDishOption,
} from '../../components/add-meal/add-meal.component';

@Component({
  selector: 'pfc-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NutritionGaugeComponent, AsyncPipe, MatButtonModule, MatListModule, TranslateModule, MatIconModule, MatDialogModule],
})
export class DashboardPageComponent implements AfterViewInit {
  profile$: Observable<IProfile>;

  dailyNutrients$: Observable<IPfcc>;
  weeklyNutrients$: Observable<IPfcc>;

  dailyAims$: Observable<IPfcc>;
  weeklyAims$: Observable<IPfcc>;

  eatenMeals$: Observable<IExtendedMeal[]>;

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
        map(ceilPfcc),
      );
    this.dailyNutrients$ = this.store.select(DomainState.todayNutrients)
      .pipe(
        map(ceilPfcc),
      );

    this.eatenMeals$ = this.store.select(DomainState.todayMeals)
      .pipe(
        combineLatestWith(this.store.select(DomainState.dishesMap), this.store.select(DomainState.foodsMap)),
        map(([meals, dishes, foods]) => {
          return meals.map(meal => {
            const dish = meal.cooked ? dishes.get(meal.dishId) || null : null;
            let food: any;
            if (meal.cooked) {
              food = dish != null ? foods.get(dish.foodId) : null;
            } else {
              food = foods.get(meal.foodId);
            }

            const pfcc = ceilPfcc(meal.pfcc, 1);
            const extendedMeal: IExtendedMeal = {
              ...meal,
              pfcc: {
                protein: pfcc.protein || 0,
                fat: pfcc.fat || 0,
                carbohydrates: pfcc.carbohydrates || 0,
                calories: pfcc.calories || 0,
              },
              dish: dish,
              food: food,
            };
            return extendedMeal;
          });
        }),
      );
  }

  mealTrackBy = (idx: number, item: IExtendedMeal) => item.id;

  ngAfterViewInit() {
    this.addMeal();
  }

  removeMeal(mealId: number) {
    this.store.dispatch(new RemoveMealAction(mealId));
  }

  addMeal() {
    const filter$ = new BehaviorSubject<string | null>(null);

    const allDishOptions$ = combineLatest([
      this.store.select(DomainState.dishes),
      this.store.select(DomainState.foodsMap),
    ]).pipe(
      map(([dishes, foodsMap]): IDishOption[] => {
        return [
          ...dishes.filter(d => {
            const foodIsPresent = foodsMap.has(d.foodId);
            if (!foodIsPresent) {
              console.error(`Food with id ${d.foodId} is not found; dish: ${d}`);
            }
            return foodIsPresent;
          }).map(dish => {
            const food = foodsMap.get(dish.foodId) as IFood;
            const item: IDishOption = {
              id: `dish-${dish.id}`,
              name: dish.name,
              type: 'dish',
              pfcc: ceilPfcc(multiplyPfcc(food.pfcc, (dish.cookedWeight / dish.recipeWeight)), 1), // TODO: Ceil pfcc?
              delete: () => {
                this.store.dispatch(new DeleteDishAction(dish.id));
              },
            };
            return item;
          }),

          ...Array.from(foodsMap.values()).map(food => {
            return {
              id: `food-${food.id}`,
              name: food.name,
              pfcc: food.pfcc,
              type: (food.isCookable ? 'recipe' : 'raw-food') as DishOptionType,
            };
          }),
        ];
      }),
    );
    const ref = this.dialog.open<AddMealComponent, AddMealDialogData>(AddMealComponent, {
      panelClass: 'fullscreen-dialog',

      data: {
        filter: val => filter$.next(val),
        items: combineLatest([allDishOptions$, filter$])
          .pipe(
            map(([options, filter]): IDishOption[] => options.filter(o => filter == null || o.name.toLowerCase().includes(filter.toLowerCase()))),
          ),
      },
    });
    ref.afterClosed()
      .subscribe(console.log);
  }

  getMealName(meal: IExtendedMeal): string | null {
    return (meal.cooked ? meal.dish?.name : meal.food.name) || null;
  }
}

type IExtendedMeal = IMeal &
  {
    food: IFood,
    dish: IDish | null
  };
