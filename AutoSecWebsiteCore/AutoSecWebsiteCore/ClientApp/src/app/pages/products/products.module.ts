import { NgModule } from '@angular/core';
import { DetailsComponent } from './product_details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import {sharedDataService } from '../../common/services/shared.services';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent

  },

  {
    path: ':id',
    component: DetailsComponent
  }

];

@NgModule({
  imports: [
    ThemeModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    DetailsComponent

  ],
  entryComponents: [
  ],
  providers: [
    sharedDataService
  ]
})
export class ProductsModule { }
