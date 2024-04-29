import { Route } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { SignupComponent } from './feature/signup/signup.component';

export const authRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];
