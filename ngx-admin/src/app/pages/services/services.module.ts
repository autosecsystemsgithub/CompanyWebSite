import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ServicesComponent } from './services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    ServicesComponent,

  ],
})
export class ServicesModule { }
