import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;


@Component({
  selector: 'ngx-about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnDestroy {


  constructor(private themeService: NbThemeService,
             ) {
  }

  ngOnDestroy() {

  }
}
