import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStoreService {
  private readonly REFRESH_TOKEN_KEY = 'refresh';

  constructor() {
  }

  loadRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  saveRefreshToken(token: string) {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
  }

  dropRefreshToken() {
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
}
