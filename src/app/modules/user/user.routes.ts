import { Routes } from '@angular/router';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';
import { HOME_ROUTES } from './home/home.routes';
import { PRODUCT_ROUTES } from './product/product.routes';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [...HOME_ROUTES, ...PRODUCT_ROUTES],
  },
];
