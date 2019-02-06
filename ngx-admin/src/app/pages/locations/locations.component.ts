import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;


@Component({
  selector: 'ngx-locations',
  styleUrls: ['./locations.component.scss'],
  templateUrl: './locations.component.html',
})
export class LocationsComponent implements OnDestroy {


  constructor(private themeService: NbThemeService,
             ) {
  }

  ngOnDestroy() {

  }
}
