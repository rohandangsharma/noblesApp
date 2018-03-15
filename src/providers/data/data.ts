import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  search(firstName, lastName) {
    if(firstName === 'Rohan' && lastName ==="Sharma") {
      return true;
    }
  }

}
