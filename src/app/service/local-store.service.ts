import {Injectable} from '@angular/core'
import {defaultWeeklyNutrientsType, isWeeklyNutrientsType, WeeklyNutrientsType} from '../commons/models/domain.models'

@Injectable({providedIn: 'root'})
export class LocalStoreService {
  private readonly REFRESH_TOKEN_KEY = 'refresh'
  private readonly WEEKLY_NUTRIENTS_TYPE_KEY = 'weeklyNutrientsType'

  constructor() {
  }

  loadRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY)
  }

  saveRefreshToken(token: string) {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token)
  }

  dropRefreshToken() {
    localStorage.removeItem(this.REFRESH_TOKEN_KEY)
  }

  loadWeeklyNutrientsType(): WeeklyNutrientsType {
    const result = localStorage.getItem(this.WEEKLY_NUTRIENTS_TYPE_KEY)
    return result != null && isWeeklyNutrientsType(result) ?
      result :
      defaultWeeklyNutrientsType
  }

  saveWeeklyNutrientsType(type: string) {
    return localStorage.setItem(this.WEEKLY_NUTRIENTS_TYPE_KEY, type)
  }
}
