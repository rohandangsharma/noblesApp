import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {
  apiUrlPrefix: string = "https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=";
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  getDataFromApi() {
    const pin = "mary65Mk";
    const url = this.apiUrlPrefix + pin;
    console.log('final url ', url);
    let temp = this.http.get(url).subscribe(output=>{
      // console.log('Output comming form API', outpu);
    });
  }
  search(firstName, lastName) {
    if(firstName === 'Rohan' && lastName ==="Sharma") {
      return true;
    }
  }

}
