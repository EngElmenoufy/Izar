import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (c) => c.ProductsComponent
      ),
    title: 'IZAR | products',
  },
  {
    path: 'product-details/:slug/:id',
    loadComponent: () =>
      import('./pages/product-details/product-details.component').then(
        (c) => c.ProductDetailsComponent
      ),
  },
];
