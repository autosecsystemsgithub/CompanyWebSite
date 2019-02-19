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
  selector: 'app-contact',
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  public headerConfig: any;
  public headerJson: any;
  public emailStatus: string;
  emailURL: any;
  contactDetails: any = {
    EmailAddress: '',
    PhoneNumber: '',
    FullName: '',
    Message: '',
    IsEnquiry: true
  };

  public resetContact: any;

  constructor(private toastrService: NbToastrService, private themeService: NbThemeService, private http: HttpClient) {
    this.emailURL = 'http://autosecsystems.azurewebsites.net/api/mailservice/sendmail';
    this.headerJson = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'No-Auth': 'True'
    };
    this.emailStatus = '';
    this.headerConfig = new HttpHeaders(this.headerJson);
    this.resetContact = Object.assign({}, this.contactDetails);
  }


  sendMessage() {
    this.http.post(this.emailURL, this.contactDetails)
      .subscribe(response => {
        if (response === 'True') {
          this.contactDetails = Object.assign({}, this.resetContact);
          this.toastrService.show('Email Sent Successfully!, we will contact you soon!', 'Success');
        } else {
          this.toastrService.show('Email not sent', 'Error!');
        }
      });

  }

 }
