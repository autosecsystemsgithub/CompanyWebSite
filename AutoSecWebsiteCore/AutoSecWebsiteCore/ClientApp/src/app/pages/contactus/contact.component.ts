import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import {
  HttpParams, HttpClient, HttpEvent, HttpHeaders, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-contact',
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  public headerConfig: any;
  public headerJson: any;
  public emailStatus: string;
  emailURL: any;
  contactDetails: any = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  constructor(private toastrService: NbToastrService, private themeService: NbThemeService, private http: HttpClient)
  {
    this.emailURL = "http://localhost:3002/send";
    this.headerJson = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'No-Auth': 'True'
    };
    this.emailStatus = '';
    this.headerConfig = new HttpHeaders(this.headerJson);
  }


  sendMessage() {

    const payload = new HttpParams()
      .set('email', this.contactDetails.email)
      .set('message', this.contactDetails.message)
      .set('phone', this.contactDetails.phone)
      .set('name', this.contactDetails.name);

    this.http.post(this.emailURL, payload)
      .subscribe(response => {
        this.emailStatus = response['status'];
        if (response['status'] == 'ok') {
          this.toastrService.show('Email Sent Successfully!, we will contact you soon!', 'Success');
        } else {
          this.toastrService.show('Email not sent', 'Error!');
        }
      });

  }

 }
