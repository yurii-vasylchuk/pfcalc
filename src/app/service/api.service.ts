import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap, throwError} from 'rxjs';
import {IAuthTokensResponse, Language} from '../commons/models/auth.models';
import {FoodType, IDish, IDishToCreate, IFood, IMeal, IProfile} from '../commons/models/domain.models';
import {IApiResponse, IPage, IPfcc} from '../commons/models/common.models';
import {DateTime} from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

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

  addMeal(meal: IMeal): Observable<IMeal> {
    return this.http.post<IApiResponse<IMeal>>('/api/meal', {
      ...meal,
      eatenOn: meal.eatenOn.toISO({includeOffset: false}),
    })
      .pipe(map(this.extractResponseData));
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
    return this.http.get<IDish>(`/api/dish/${dishId}`);
  }

  loadFoodsList(page: number, pageSize: number, name?: string, type?: FoodType): Observable<IPage<IFood>> {
    let params: any = {
      page,
      pageSize,
    };

    if (name != null && name !== '') {
      params['name'] = name;
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
      );

  }

  loadFood(id: number): Observable<IFood> {
    return this.http.get<IApiResponse<IFood>>(`/api/food/${id}`)
      .pipe(
        map(this.extractResponseData),
      );
  }

  refreshAuth(refreshToken: string): Observable<IAuthTokensResponse> {
    return this.http.post<IApiResponse<IAuthTokensResponse>>('/api/user/refresh-auth-token', {
      refreshToken,
    }).pipe(map(this.extractResponseData));
  }

  private extractResponseData<T>(rsp: IApiResponse<T>): T {
    if (rsp.success) {
      return rsp.data;
    } else {
      throw new Error(rsp.error);
    }
  }

  private extractVoidResponse = map((rsp: IApiResponse<void>) => {
    this.extractResponseData(rsp);
    return null;
  });
}
