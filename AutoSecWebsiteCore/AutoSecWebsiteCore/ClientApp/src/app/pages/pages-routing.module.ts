import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from '../pages/products/products.component';
import { LocationsComponent } from './locations/locations.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contactus/contact.component';
import { AboutComponent } from './aboutus/about.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
      path: 'products',
      loadChildren: '../pages/products/products.module#ProductsModule'
    },
    {
      path: 'services',
      component: ServicesComponent,
    },
    {
      path: 'locations',
      component: LocationsComponent,
    },
    {
      path: 'contactus',
      component: ContactComponent,
    },
    {
      path: 'aboutus',
      component: AboutComponent,
    },
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
