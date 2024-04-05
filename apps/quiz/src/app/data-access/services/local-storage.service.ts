import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getToken(key: string): string | null {
    const value = localStorage.getItem(key);
    if (!value) return null;

    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      localStorage.setItem(key, value);
    }
  }
}
