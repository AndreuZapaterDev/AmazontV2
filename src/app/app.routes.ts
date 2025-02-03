import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralComponent } from './general/general.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: GeneralComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        children: [
          {
            path: ':name',
            component: CategoryComponent,
          },
        ],
      },
    ],
  },
  { path: 'offers', component: OffersComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'navbar', component: NavbarComponent },
];
