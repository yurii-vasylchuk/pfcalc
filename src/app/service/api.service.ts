import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, combineLatestWith, identity, map, Observable, of, switchMap, tap, throwError} from 'rxjs';
import {IAuthTokensResponse, Language} from '../commons/models/auth.models';
import {FoodType, IDish, IDishToCreate, IFood, IMeal, IMeasurement, IProfile} from '../commons/models/domain.models';
import {IApiResponse, IPage, IPfcc} from '../commons/models/common.models';
import {DateTime} from 'luxon';
import {AddMeal} from '../features/add-meal/add-meal.state-models';
import IMealOption = AddMeal.IMealOption;

@Injectable({providedIn: 'root'})
export class ApiService {

  private extractVoidResponse = map((rsp: IApiResponse<void>) => {
    this.extractResponseData(rsp);
    return null;
  });

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string): Observable<IAuthTokensResponse> {
    return this.http.post<IApiResponse<IAuthTokensResponse>>('/api/user/login',
      {
        email,
        password,
      }).pipe(map(this.extractResponseData));
  }

  getProfile(): Observable<IProfile> {
    return this.http.get<IApiResponse<IProfile>>('/api/user/profile')
      .pipe(
        map(this.extractResponseData),
      );
  }

  signUp(email: string, name: string, password: string, language: Language): Observable<IAuthTokensResponse> {
    return this.http.post<IApiResponse<IAuthTokensResponse>>('/api/user/register', {
      email,
      name,
      password,
      preferredLanguage: language,
    }).pipe(map(this.extractResponseData));
  }

  configureProfile(aims: IPfcc): Observable<null> {
    return this.http.post<IApiResponse<void>>('/api/user/profile', {
      aims,
    }).pipe(this.extractVoidResponse);
  }

  removeMeal(mealId: number): Observable<null> {
    if (mealId == null) {
      return throwError(() => new Error('mealId is required'));
    }

    return this.http.delete<IApiResponse<void>>(`/api/meal/${mealId}`)
      .pipe(this.extractVoidResponse);
  }

  addMeal(meal: Omit<IMeal, 'id'>): Observable<IMeal> {
    return this.http.post<IApiResponse<IMeal>>('/api/meal', {
      ...meal,
      eatenOn: meal.eatenOn.toISO({includeOffset: false}),
    }).pipe(
      map(this.extractResponseData),
      tap(meal => {
        meal.eatenOn = DateTime.fromISO(meal.eatenOn as unknown as string);
      }),
    );
  }

  loadMeals(page: number, pageSize: number, from: DateTime, to: DateTime): Observable<IPage<IMeal>> {
    let params: any = {
      page, pageSize,
    };

    if (from != null) {
      params['from'] = from.toISO({includeOffset: false});
    }

    if (to != null) {
      params['to'] = to.toISO({includeOffset: false});
    }

    return this.http.get<IApiResponse<IPage<IMeal>>>('/api/meal', {
      params,
    }).pipe(
      map(this.extractResponseData),
      tap(page => {
        page.data.forEach(meal => meal.eatenOn = DateTime.fromISO(meal.eatenOn as unknown as string));
      }),
    );
  }

  addDish(dish: IDishToCreate): Observable<IDish> {
    return this.http.post<IApiResponse<IDish>>('/api/dish', {
      ...dish,
      cookedOn: dish.cookedOn.toISO({includeOffset: false}),
    })
      .pipe(map(this.extractResponseData));
  }

  updateDish(id: number, dish: IDishToCreate): Observable<IDish> {
    return this.http.put<IApiResponse<IDish>>(`/api/dish/${id}`, {
      ...dish,
      cookedOn: dish.cookedOn.toISO({includeOffset: false}),
    }).pipe(map(this.extractResponseData));
  }

  deleteDish(dishId: number): Observable<null> {
    if (dishId == null) {
      throwError(() => new Error('Dish id is required'));
    }

    return this.http.delete<IApiResponse<void>>(`/api/dish/${dishId}`)
      .pipe(this.extractVoidResponse);
  }

  addFood(food: Omit<IFood, "id">): Observable<IFood> {
    return this.http.post<IApiResponse<IFood>>('/api/food', food)
      .pipe(map(this.extractResponseData));
  }

  updateFood(food: Omit<IFood, 'ownedByUser'>): Observable<IFood> {
    return this.http.post<IApiResponse<IFood>>('/api/food', food)
      .pipe(map(this.extractResponseData));
  }

  deleteFood(id: number): Observable<void> {
    return this.http.delete<IApiResponse<void>>(`/api/food/${id}`)
      .pipe(this.extractVoidResponse);
  }

  loadDish(dishId: number): Observable<IDish> {
    return this.http.get<IApiResponse<IDish>>(`/api/dish/${dishId}`)
      .pipe(
        map(this.extractResponseData),
      );
  }

  loadFoodsList(page: number, pageSize: number, name?: string, type?: FoodType): Observable<IPage<IFood>> {
    let params: any = {
      page,
      pageSize,
    };

    if (name != null && name.trim() !== '') {
      params['name'] = name.trim();
    }

    if (type != null) {
      params['type'] = type;
    }

    return this.http.get<IApiResponse<IPage<IFood>>>(`/api/food`,
      {
        params: params,
      })
      .pipe(
        map(this.extractResponseData),
        tap(page => page.data.forEach(f => f.measurements = (f.measurements ?? []))),
        switchMap(page => {
          return combineLatest(page.data.map(food => this.loadMeasurements(food.id))).pipe(
            map(measurements => {
              measurements.flatMap(identity).forEach(m => {
                const food = page.data.find(f => f.id === m.foodId);
                if (food == null) {
                  console.warn(`Can't find appropriate food (#${m.foodId}) for measurement #${m.id} - ${m.name}`);
                  return;
                }
                food.measurements.push(m);
              });

              return page;
            }),
          );
        }),
      );

  }

  loadFood(id: number): Observable<IFood> {
    return this.http.get<IApiResponse<IFood>>(`/api/food/${id}`)
      .pipe(
        map(this.extractResponseData),
        combineLatestWith(this.loadMeasurements(id)),
        map(([food, measurements]) => {
          food.measurements = measurements;
          return food;
        }),
      );
  }

  refreshAuth(refreshToken: string): Observable<IAuthTokensResponse> {
    return this.http.post<IApiResponse<IAuthTokensResponse>>('/api/user/refresh-auth-token', {
      refreshToken,
    }).pipe(map(this.extractResponseData));
  }

  getMealOptions(filter: string, page: number, pageSize: number): Observable<IPage<IMealOption>> {
    const params: any = {
      page,
      pageSize,
    };

    if (filter != null && filter.trim() !== '') {
      params['filter'] = filter.trim();
    }

    return this.http.get<IApiResponse<IPage<IMealOption>>>('/api/meal/options', {
      params,
    }).pipe(
      map(this.extractResponseData),
      switchMap(data => {
        const sources = data.data.filter(opt => opt.type === 'RECIPE' || 'INGREDIENT')
          .map(opt => this.loadMeasurements(opt.foodId));

        return combineLatest([of(data), combineLatest(sources)]);
      }),
      map(([options, allMeasurements]) => {
        allMeasurements
          .filter(measurements => measurements != null && measurements.length > 0)
          .forEach(measurements => {
            const food = options.data
              .find(opt => opt.type === 'RECIPE' || 'INGREDIENT' && opt.foodId == measurements[0].foodId);

            if (food != null) {
              food.measurements = measurements;
            }
          });

        return options;
      }),
    );
  }

  loadMeasurements(foodId: number): Observable<IMeasurement[]> {
    return this.http.get<IApiResponse<IMeasurement[]>>(`/api/measurement`, {params: {foodId}})
      .pipe(
        map(this.extractResponseData),
      );
  }

  updateMeasurement(measurement: IMeasurement): Observable<IMeasurement> {
    return this.http.put<IApiResponse<IMeasurement>>(`/api/measurement/${measurement.id}`, measurement)
      .pipe(
        map(this.extractResponseData),
      );
  }

  createMeasurement(measurement: IMeasurement): Observable<IMeasurement> {
    return this.http.post<IApiResponse<IMeasurement>>(`/api/measurement`, measurement)
      .pipe(
        map(this.extractResponseData),
      );
  }

  private extractResponseData<T>(rsp: IApiResponse<T>): T {
    if (rsp.success) {
      return rsp.data;
    } else {
      throw new Error(rsp.error);
    }
  }
}
