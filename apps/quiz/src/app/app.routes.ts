import { Routes } from '@angular/router';

import { authGuard } from './data-access/guards/auth.guard';
import { unAuthGuard } from './data-access/guards/un-auth.guard';
import { BlankLayoutComponent, MainLayoutComponent } from './layout';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import(
            './features/home/feature/home/home.component'
          ).then((c) => c.HomeComponent),
      },
      {
        path: 'fashion-flash-cards',
        loadComponent: () =>
          import(
            './features/fashion-flash-card/feature/fashion-flash-card/fashion-flash-card.component'
          ).then((c) => c.FashionFlashCardComponent),
      },
      {
        path: 'create-set',
        loadComponent: () =>
          import(
            './features/create-set/feature/create-set/create-set.component'
          ).then((c) => c.CreateSetComponent),
      },
    ],
  },
  {
    path: 'auth',
    component: BlankLayoutComponent,
    canActivate: [unAuthGuard],
    loadChildren: () => import('./features/auth/auth.routes').then(c => c.authRoutes)
    // children: [
    //   {
    //     path: '',
    //     loadComponent: () =>
    //       import(
    //         './features/auth/feature/auth/auth.component'
    //       ).then((c) => c.AuthComponent),
    //   }
    // ]
  }
];
