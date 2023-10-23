import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import {ISignInResponse, ISignUpResponse, Language} from '../commons/models/auth.models';
import {FoodType, IDish, IDishToCreate, IFood, IMeal, IProfile} from '../commons/models/domain.models';
import {IApiResponse, IPage, IPfcc} from '../commons/models/common.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string): Observable<ISignInResponse> {
    return this.http.post<IApiResponse<ISignInResponse>>('/api/user/login',
      {
        email,
        password,
      }).pipe(map(this.extractResponseData));
  }

  getProfile(): Observable<IProfile> {
    return this.http.get<IApiResponse<IProfile>>('/api/user/profile')
      .pipe(map(this.extractResponseData));
  }

  signUp(email: string, name: string, password: string, language: Language): Observable<ISignUpResponse> {
    return this.http.post<IApiResponse<ISignUpResponse>>('/api/user/register', {
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

  addDish(dish: IDishToCreate): Observable<IDish> {
    return this.http.post<IApiResponse<IDish>>('/api/dish', dish)
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

  /**
   * Updating the food. A food might be literally updated if it's owned by the user, otherwise a new food will be
   * created
   * @param food a food to update
   */
  updateFood(food: Omit<IFood, 'ownedByUser'>): Observable<IFood> {
    return throwError(() => Error("Operation is not supported"));
  }

  deleteFood(id: number): Observable<void> {
    return this.http.delete<IApiResponse<void>>(`/api/food/${id}`)
      .pipe(this.extractVoidResponse);
  }

  loadDish(dishId: number): Observable<IDish> {
    return this.http.get<IDish>(`/api/dish/${dishId}`);
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
      .pipe(map(this.extractResponseData));

  }

  loadFood(id: number): Observable<IFood> {
    return this.http.get<IApiResponse<IFood>>(`/api/food/${id}`)
      .pipe(
        map(this.extractResponseData),
      );
  }
}
