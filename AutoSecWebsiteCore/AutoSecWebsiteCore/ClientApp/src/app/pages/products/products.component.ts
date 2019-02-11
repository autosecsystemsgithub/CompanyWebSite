import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { sharedDataService } from '../../common/services/shared.services';

@Component({
  selector: 'ngx-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {

  ProductList: any;
  headerData: any;

  constructor(private themeService: NbThemeService,
              private httpClient: HttpClient,
              private router: Router,
              private sharedSVC: sharedDataService
  ) {
    this.ProductList = {
      Products: []
    }
  }

  ngOnDestroy() {

  }
  gotoDetailsPage(detail) {
    this.sharedSVC.setDetails(detail);
    this.router.navigateByUrl('pages/products/'+detail.Model);
  }
  public getJSON(): Observable<any> {
    return this.httpClient.get("assets/data/Products.json");
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.ProductList.Products = data['Products'];
    });
  }
}
