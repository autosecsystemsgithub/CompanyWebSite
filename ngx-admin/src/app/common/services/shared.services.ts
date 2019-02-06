import { Injectable } from '@angular/core';

@Injectable()
export class sharedDataService {

  constructor() { }

  public detailHeaders: any = "";


  getDetails() {

    return this.detailHeaders;
  }

  setDetails(x: any) {
    this.detailHeaders = x;
  }

}
