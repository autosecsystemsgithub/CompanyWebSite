import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AboutComponent } from './about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
     AboutComponent,

  ],
})
export class AboutModule { }
