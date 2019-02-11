import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ContactComponent } from './contact.component';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    ContactComponent,

  ],
})
export class ContactModule { }
