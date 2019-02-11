import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { sharedDataService } from '../../../common/services/shared.services';


@Component({
  selector: 'product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnDestroy, OnInit {

  // constants
  productName: string;
  cacheBuster: any;
  type: string;
  productData: any;
  headers: any;
  tableData: any;
  imageData: any;

  constructor(
    private activeRoute: Router,
    private httpClient: HttpClient,
    private sharedSVC: sharedDataService
  ) {

    this.imageData = {
      ProdDes: {
        Folder: '',
        Images: []
      }
    }
    this.tableData = {
      ProductSpec: {
        Model: '',
        tableValues: {
          name: '',
          values: []
        }
      }
    }
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get("assets/data/"+this.productName+".json?v="+this.cacheBuster+"");
  }
  ngOnInit() {
    this.headers = this.sharedSVC.getDetails();

    console.log(this.headers);
    // Initialize constants on init
    this.cacheBuster = Math.random();
    this.productName = this.activeRoute.url.split('/')[3];
    this.getJSON().subscribe(data => {

      this.imageData.ProdDes.Images = data['ProdDes']['Images'];
      this.tableData.ProductSpec.tableValues = data['ProductSpec']['tableValues'];
    });

  }
  ngOnDestroy() {
    console.log("destroyed!");

  }


}
