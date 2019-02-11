import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;


@Component({
  selector: 'ngx-services',
  styleUrls: ['./services.component.scss'],
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnDestroy {


  constructor(private themeService: NbThemeService,
             ) {
  }

  ngOnDestroy() {

  }
}
