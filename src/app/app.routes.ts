import { Routes } from '@angular/router';
import { LayoutComponent } from './domain/shared/components/layout/layout.component';
import { ListComponent } from './domain/products/pages/list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      }
    ]
  }
];
