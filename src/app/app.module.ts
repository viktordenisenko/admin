import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component';
import { CategoriesCreateComponent } from './components/categories-create/categories-create.component';

const routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'create',
        component: ProductCreateComponent
      },
      {
        path: 'update/:productId',
        component: ProductUpdateComponent
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: 'create',
        component: CategoriesCreateComponent
      },
      {
        path: 'update/:categoryId',
        component: CategoriesUpdateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    CategoriesComponent,
    CategoriesUpdateComponent,
    CategoriesCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
