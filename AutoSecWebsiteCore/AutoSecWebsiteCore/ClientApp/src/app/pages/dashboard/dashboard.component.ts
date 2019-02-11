import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule, Router } from '@angular/router';



@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})

export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('carousel') carousel: any;
  constructor(private themeService: NbThemeService,
    config: NgbCarouselConfig,
    private router: Router

  ) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = false;
  }
  gotoLocation(page) {

    if (page == 'products') {
      this.router.navigateByUrl('pages/products');
    } else if (page == 'services') {
      this.router.navigateByUrl('pages/services');
    } else if (page == 'aboutus') {
      this.router.navigateByUrl('pages/aboutus');
    }
  }
  ngOnDestroy() {

  }

  ngOnInit() {
  }
}
