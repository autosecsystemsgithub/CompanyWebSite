import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { LocationsComponent } from './locations.component';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    LocationsComponent,

  ],
})
export class LocationsModule { }
