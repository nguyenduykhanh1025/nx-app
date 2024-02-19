import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'fashion-flash-cards',
        loadComponent: () =>
          import(
            './features/fashion-flash-card/feature/fashion-flash-card/fashion-flash-card.component'
          ).then((c) => c.FashionFlashCardComponent),
      },
    ],
  },
];
