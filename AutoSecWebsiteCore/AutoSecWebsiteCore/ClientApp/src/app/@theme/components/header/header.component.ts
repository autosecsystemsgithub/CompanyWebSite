import { Component, Input, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  selectedItem: string;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private router: Router) {
  }

  ngOnInit() {
    this.selectedItem = 'home'; // set initial page active
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  pageRoute(page): void {
    this.selectedItem = page;
    if (page == 'home') {
      this.router.navigateByUrl('pages/dashboard');
    } else if (page == 'products') {
      this.router.navigateByUrl('pages/products');
    } else if (page == 'services') {
      this.router.navigateByUrl('pages/services');
    } else if (page == 'locations') {
      this.router.navigateByUrl('pages/locations');
    } else if (page == 'contactus') {
      this.router.navigateByUrl('pages/contactus');
    }
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
