import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralComponent } from './general/general.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

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
      {
        path: 'products',
        component: ProductPageComponent,
      },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  { path: 'offers', component: OffersComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sign-up', component: SignUpComponent },
  /*   { path: 'product/:id', component: ProductPageComponent },
  { path: 'product', component: ProductPageComponent }, */
];
