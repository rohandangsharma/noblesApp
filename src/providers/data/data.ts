import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {

  //User information
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
  Photo:string;

  //school year information
  Season:string;

  

  foodData:string;

  userPin:string = "mary65Mk";

  aboutmePrefix: string = "https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=";
  yearPrefix: string = "https://nobilis.nobles.edu/iosnoblesappweb/xmlAcademicYears.php?iosPIN=";
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getDataFromApi(pin:string) {
    const url = this.aboutmePrefix + pin;
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
      this.Photo = "https://nobilis.nobles.edu/images_sitewide/photos/" + this.PeopleID + ".jpeg";
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

  search(personType:string, first:string, last:string, gender:string ){
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlDirectory.php?iosPIN=" + "mary65Mk" + "&PersonType=";

    url+=personType;
    if(first.length>0){
      url+= "&FirstName=" + first;
    }
    if(last.length>0){
      url+= "&LastName=" + last;
    }
    if(gender.length>0){
      url+="&Gender=" + gender;
    }
    console.log(url);
   return this.http.get(url, {responseType: 'text'});
  }

  games(){
    let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?startDate=4/12/2018&eventtypes=GamesAndPractices";
    console.log(url);
    return this.http.get(url, {responseType: 'text'});
  }

  getSeason(pin:string) {
    const url = this.yearPrefix + pin;
    console.log('final url ', url);
    //return "hello";
    this.http.get(url, {responseType: 'text'}).subscribe(output=>{
      //let temp = JSON.stringify(output);
      output => output.text();
      var array = output.split("##");
      this.Season=array[3].substring(15);
      console.log("Current Season: " + this.Season);
    }, (error)=>{
      console.log('errors', error);
    });
  }

  
}
