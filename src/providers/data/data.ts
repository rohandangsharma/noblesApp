import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {

  PersonType:string;
  FirstName:string;
  UNID:string;
  PeopleID:string;
  MACNum:string;
  MACCombo:string;
  ShattuckNum:string;
  ShattuckCombo:string;
  MSCubbyNum:string;
  MSCubbyCombo:string;
  AssemblySeat:string;

  search:string;

  foodData:string;


  
  
  apiUrlPrefix: string = "https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=";
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  
  getDataFromApi(pin:string) {
    const url = this.apiUrlPrefix + pin;
    console.log('final url ', url);
    //return "hello";
    this.http.get(url, {responseType: 'text'}).subscribe(output=>{
      //let temp = JSON.stringify(output);
      output => output.text();
      var array = output.split("#");
      this.PersonType=array[0];
      this.FirstName=array[1].substring(10);
      this.UNID=array[2].substring(5);
      this.PeopleID=array[3].substring(9);
      this.MACNum=array[4].substring(16);
      this.MACCombo=array[5].substring(15);
      this.ShattuckNum=array[6].substring(24);
      this.ShattuckCombo=array[7].substring(23);
      this.MSCubbyNum=array[8].substring(10);
      this.MSCubbyCombo=array[9].substring(13);
      this.AssemblySeat=array[10].substring(13);
      // console.log('Output comming form API', array);
      //return array;
    }, (error)=>{
      console.log('errors', error);
    });
  }

  



  //   //url += "&Date=" + this.date;
  //   this.http.get(url, {responseType: 'text'}).subscribe(output=>{
  //     //let temp = JSON.stringify(output);
  //     output => output.text();
  //     console.log('Output coming form API', output);
  //     return output;
  //   }, (error)=>{
  //     console.log('errors', error);
  //   });
  // }

  // search(firstName, lastName) {
  //   if(firstName === 'Rohan' && lastName ==="Sharma") {
  //     return true;
  //   }
  // }

  // hello(){
  //   let url="https://nobilis.nobles.edu/iosNoblesAppWeb/xmlDirectory.php?iosPIN=mary65Mk&PersonType=Student";
  //   this.http.get(url, {responseType: 'text'}).subscribe(output=>{
  //     //let temp = JSON.stringify(output);
  //     output => output.text();
  //     this.search=output;
  //     // console.log('Output comming form API', array);
  //     //return array;
  //   }, (error)=>{
  //     console.log('errors', error);
  //   });
    
  //   if (window.DOMParser)
  //   {
  //       let parser = new DOMParser();
  //       let xmlDoc = parser.parseFromString(txt, "text/xml");
  //   }
  //   else // Internet Explorer
  //   {
  //       xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
  //       xmlDoc.async = false;
  //       xmlDoc.loadXML(txt);
  //   }
  // }

}
