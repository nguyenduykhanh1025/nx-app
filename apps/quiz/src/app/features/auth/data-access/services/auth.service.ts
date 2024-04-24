import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Auth } from '@quiz-app/data-access/models';
import { delay, Observable, of } from 'rxjs';
import { selectIsAuthenticated } from '../store';
import { LocalStorageService } from '@quiz-app/data-access/services/local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly #store = inject(Store);
  readonly #selectIsAuthenticated = this.#store.select(selectIsAuthenticated);
  readonly #localStorageService = inject(LocalStorageService);

  logIn(auth: Auth): Observable<{ token: string }> {
    return of({ token: 'something' }).pipe(delay(2000));
  }

  authenticated(): Observable<boolean> {
    return this.#selectIsAuthenticated;
  }
}
