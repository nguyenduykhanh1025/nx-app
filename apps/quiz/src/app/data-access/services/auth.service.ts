import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

import { LOCAL_STORAGE_USER_KEY } from '../constants';
import { Auth } from '../models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #localStorageService = inject(LocalStorageService);
  readonly #router = inject(Router);

  authenticated(): boolean {
    return !!this.#localStorageService.getToken(LOCAL_STORAGE_USER_KEY);
  }

  login(auth: Auth): void {
    timer(1000).subscribe(() => {
      this.#localStorageService.setItem(LOCAL_STORAGE_USER_KEY, 'ahihi');
      this.#router.navigate(['/home']);
    });
  }
}
