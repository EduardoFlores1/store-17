import { Routes } from '@angular/router';
import { LayoutComponent } from './domain/shared/components/layout/layout.component';
import { ListComponent } from './domain/products/pages/list/list.component';
import { NotFoundComponent } from './domain/info/pages/not-found/not-found.component';
import { ProductDetailComponent } from './domain/products/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
