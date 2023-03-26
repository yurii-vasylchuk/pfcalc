import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  private readonly JWT_KEY = 'jwt';

  constructor() {
  }

  loadJwtToken(): string | null {
    return localStorage.getItem(this.JWT_KEY);
  }

  saveJwtToken(token: string) {
    localStorage.setItem(this.JWT_KEY, token);
  }

  dropJwtToken() {
    localStorage.removeItem(this.JWT_KEY);
  }
}
