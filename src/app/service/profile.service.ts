import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {ISignInResponse, ISignUpResponse} from '../commons/models/auth.models';
import {ICreateDishResponse, IDishToCreate, IFood, IMeal, IProfileResponse} from '../commons/models/domain.models';
import {DateTime} from 'luxon';
import {IPfcc} from '../commons/models/common.models';
import {sum} from "../commons/functions";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string): Observable<ISignInResponse> {
    if (email === 'error') {
      return throwError(() => new Error('Sign in failed'));
    }

    return of({
      token: 'test-token',
      ...this.mockProfile(),
    });
  }

  getProfile(): Observable<IProfileResponse> {
    return of({...this.mockProfile()});
  }

  signUp(email: string, password: string): Observable<ISignUpResponse> {
    if (email.includes('error')) {
      return throwError(() => new Error('Sign up failed'));
    }

    return of({
      token: 'test-token',
    });
  }

  configureProfile(aims: IPfcc): Observable<null> {
    return of(null);
  }

  removeMeal(mealId: number): Observable<null> {
    return of(null);
  }

  addMeal(meal: IMeal): Observable<{ meal: IMeal }> {
    return of({
      meal: {
        ...meal,
        id: meal.id != null ? meal.id : (Math.ceil(Math.random() * 10000))
      }
    });
  }

  addDish(dish: IDishToCreate): Observable<ICreateDishResponse> {
    return of({
      dish: {
        id: Math.ceil(Math.random() * 10000),
        cookedOn: dish.cookedOn,
        pfcc: {
          protein: 20 + Math.ceil(Math.random() * 40),
          carbohydrates: 40 + Math.ceil(Math.random() * 50),
          fat: 5 + Math.ceil(Math.random() * 15),
          calories: 100 + Math.ceil(Math.random() * 900),
        },
        name: dish.name,
        foodId: dish.foodId,
        ingredients: dish.ingredients,
        recipeWeight: dish.ingredients?.map(i => i.ingredientWeight).reduce(sum, 0),
        cookedWeight: dish.cookedWeight,
        deleted: false
      }
    });
  }

  private readonly mockProfile: () => IProfileResponse = () => {
    return {
      aims: {
        protein: 120,
        fat: 50,
        carbohydrates: 180,
        calories: null,
      },

      foods: [
        {
          id: 1,
          type: 'ingredient',
          name: 'СВ Задняя часть',
          isCookable: true,
          consistOf: null,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 21,
            fat: 9.6,
            carbohydrates: 0,
            calories: 176,
          },
        },
        {
          id: 2,
          type: 'ingredient',
          name: 'СВ Корейка',
          isCookable: true,
          consistOf: null,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 20.50,
            fat: 5.4,
            carbohydrates: 0,
            calories: 136,
          },
        },
        {
          id: 3,
          type: 'ingredient',
          name: 'СВ Лопатка',
          isCookable: true,
          consistOf: null,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 16.7,
            fat: 20,
            carbohydrates: 0,
            calories: 253,
          },
        },
        {
          id: 4,
          type: 'ingredient',
          consistOf: null,
          name: 'СВ Шея',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 16.1,
            fat: 22.8,
            carbohydrates: 0,
            calories: 267,
          },
        },
        {
          id: 5,
          type: 'ingredient',
          consistOf: null,
          name: 'КУР Бедро б.к.',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 25.7,
            fat: 10.7,
            carbohydrates: 0,
            calories: 207,
          },
        },
        {
          id: 6,
          type: 'ingredient',
          consistOf: null,
          name: 'КУР Филе',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 23,
            fat: 1.2,
            carbohydrates: 0,
            calories: 110,
          },
        },
        {
          id: 7,
          type: 'ingredient',
          consistOf: null,
          name: 'ГОВ Лопатка',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 20.5,
            fat: 6.2,
            carbohydrates: 0,
            calories: 144,
          },
        },
        {
          id: 8,
          type: 'ingredient',
          consistOf: null,
          name: 'ГОВ Вырезка',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 20.7,
            fat: 8.8,
            carbohydrates: 0,
            calories: 169,
          },
        },
        {
          id: 9,
          type: 'ingredient',
          consistOf: null,
          name: 'Пельмени ГБ свинные',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 14,
            fat: 11.5,
            carbohydrates: 29,
            calories: 272,
          },
        },
        {
          id: 10,
          type: 'ingredient',
          consistOf: null,
          name: 'Пельмени ГБ с/г',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 13,
            fat: 11.2,
            carbohydrates: 28.3,
            calories: 262,
          },
        },
        {
          id: 11,
          type: 'ingredient',
          consistOf: null,
          name: 'Пельмени ГБ 3 мяса',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 13,
            fat: 11.2,
            carbohydrates: 28.3,
            calories: 262,
          },
        },
        {
          id: 12,
          type: 'ingredient',
          consistOf: null,
          name: 'Гречка',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 13.2,
            fat: 3.4,
            carbohydrates: 71.5,
            calories: 343,
          },
        },
        {
          id: 13,
          type: 'ingredient',
          consistOf: null,
          name: 'Рис/Макароны',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 7,
            fat: 0.6,
            carbohydrates: 77.3,
            calories: 323,
          },
        },
        {
          id: 14,
          type: 'ingredient',
          consistOf: null,
          name: 'Булгур',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 12.3,
            fat: 1.3,
            carbohydrates: 75.8,
            calories: 342,
          },
        },
        {
          id: 15,
          type: 'ingredient',
          consistOf: null,
          name: 'Горох',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 23,
            fat: 1.2,
            carbohydrates: 53.3,
            calories: 303,
          },
        },
        {
          id: 16,
          type: 'ingredient',
          consistOf: null,
          name: 'Нут',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 19.3,
            fat: 6,
            carbohydrates: 60.6,
            calories: 364,
          },
        },
        {
          id: 17,
          type: 'ingredient',
          consistOf: null,
          name: 'Яйцо',
          isCookable: false,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 6.3,
            fat: 5,
            carbohydrates: 0,
            calories: 74,
          },
        },
        {
          id: 18,
          type: 'ingredient',
          consistOf: null,
          name: 'Полента',
          isCookable: true,
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 7.2,
            fat: 1.5,
            carbohydrates: 72.1,
            calories: 331,
          },
        },
        {
          id: 19,
          type: 'ingredient',
          consistOf: null,
          isCookable: false,
          name: 'Моцарелла',
          hidden: true,
          ownedByUser: false,
          pfcc: {
            protein: 19,
            fat: 1,
            carbohydrates: 18.5,
            calories: 246,
          },
        },
        {
          id: 20,
          type: 'ingredient',
          consistOf: null,
          name: 'Протеин',
          hidden: true,
          isCookable: false,
          ownedByUser: false,
          pfcc: {
            protein: 80,
            fat: 0,
            carbohydrates: 0,
            calories: 433,
          },
        },
        {
          id: 21,
          type: 'recipe',
          consistOf: [
            {
              id: 13,
              type: 'ingredient',
              consistOf: null,
              name: 'Рис/Макароны',
              isCookable: true,
              hidden: true,
              ownedByUser: false,
              ingredientWeight: 200,
              pfcc: {
                protein: 14,
                fat: 1.2,
                carbohydrates: 154.6,
                calories: 646,
              },
            },
            {
              id: 17,
              type: 'ingredient',
              consistOf: null,
              name: 'Яйцо',
              isCookable: false,
              hidden: true,
              ownedByUser: false,
              ingredientWeight: 200,
              pfcc: {
                protein: 6.3,
                fat: 5,
                carbohydrates: 0,
                calories: 74,
              },
            },
            {
              id: 1,
              type: 'ingredient',
              name: 'СВ Задняя часть',
              isCookable: true,
              consistOf: null,
              hidden: true,
              ownedByUser: false,
              ingredientWeight: 50,
              pfcc: {
                protein: 10.5,
                fat: 4.8,
                carbohydrates: 0,
                calories: 88,
              },
            }
          ],
          name: 'Плов',
          hidden: true,
          isCookable: true,
          ownedByUser: true,
          pfcc: {
            protein: 80,
            fat: 0,
            carbohydrates: 0,
            calories: 433,
          },
        },
      ],
      dishes: [
        {
          id: 1,
          name: 'Рис',
          cookedOn: DateTime.now().set({weekday: 1}),
          foodId: 13,
          recipeWeight: 230,
          cookedWeight: 560,
          ingredients: [
            {
              id: 13,
              type: 'ingredient',
              consistOf: null,
              name: 'Рис/Макароны',
              isCookable: true,
              hidden: true,
              ownedByUser: false,
              pfcc: {
                protein: 7,
                fat: 0.6,
                carbohydrates: 77.3,
                calories: 323,
              },
              ingredientWeight: 230
            }
          ],
          pfcc: {
            protein: 3.5,
            fat: 0.3,
            carbohydrates: 38.65,
            calories: 161.5
          },
          deleted: false
        },
      ],
      meals: [
        {
          id: 1,
          cooked: true,
          dishId: 1,
          foodId: 13,
          eatenOn: DateTime.now(),
          weight: 200,
          pfcc: {
            protein: 6.07547,
            fat: 0.52075,
            carbohydrates: 67.09056,
            calories: 280.33962,
          },
        },
        {
          id: 2,
          cooked: false,
          foodId: 20,
          dishId: null,
          eatenOn: DateTime.now(),
          weight: 30,
          pfcc: {
            protein: 24,
            calories: 130,
            carbohydrates: null,
            fat: null,
          },
        },
      ],

      profileConfigured: true,

      account: {
        email: 'yva@test.com',
        preferredLanguage: 'en',
      },
    };
  };

  deleteDish(dishId: number): Observable<null> {
    return of(null);
  }

  addFood(food: Omit<IFood, "id">): Observable<IFood> {
    return of({
      ...food,
      ownedByUser: false,
      id: Math.ceil(Math.random() * 10000),
    } as IFood);
  }

  /**
   * Updating the food. A food might be literally updated if it's owned by the user, otherwise a new food will be created
   * @param food a food to update
   */
  updateFood(food: Omit<IFood, 'ownedByUser'>): Observable<IFood> {
    let {id: _, ...rest} = food;
    return of({
      ...rest,
      id: Math.ceil(Math.random() * 10000),
      ownedByUser: false
    } as IFood);
  }

  deleteFood(id: number): Observable<number> {
    return of(id);
  }
}
