import { Injectable } from '@angular/core';
import { Auth } from '@quiz-app/data-access/models';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  logIn(auth: Auth): Observable<{token: string}> {
    return of({ token: 'something' }).pipe(delay(2000));
  }
}
