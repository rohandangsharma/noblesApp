import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {

  userPin:string = "mary65Mk";
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
  LastName:string;
  Address:string;
  Email:string;
  Cell:string;
  Home:string;

  //school year information
  Season:string;
  foodData:string;

  
  

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  //Get User Data (public and private)
  getUserData() {
    const urlPrivate = "https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=" + this.userPin;
    console.log('final url ', urlPrivate);
    this.http.get(urlPrivate, {responseType: 'text'}).subscribe(output=>{
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
    },(error)=>{
      console.log('errors', error);
    });

      let urlPublic = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlDirectory.php?iosPIN=" + this.userPin + "&PersonType=" + this.PersonType;
      console.log(urlPublic);
      this.http.get(urlPublic, {responseType: 'text'}).subscribe(output=>{
        let parser = new DOMParser();
        let doc = parser.parseFromString(output, "text/xml");
        let user = doc.getElementById(this.PeopleID);
        
        this.LastName = user.children[1].innerHTML;
        this.Address = user.children[7].innerHTML + ", " + user.children[9].innerHTML + ", " + user.children[10].innerHTML;
        this.Email = user.children[2].innerHTML;
        this.Cell = user.children[3].innerHTML;
        this.Home = user.children[3].innerHTML;
    }, (error)=>{
      console.log('errors', error);
    });
  }
  
  //Returns XML data from nobilis. Appends url with data from directory search fields
  search(personType:string, first:string, last:string, gender:string ){
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlDirectory.php?iosPIN=" + this.userPin + "&PersonType=";
    url+=personType;
    if(first.length>0){ url+= "&FirstName=" + first; }
    if(last.length>0){ url+= "&LastName=" + last; }
    if(gender.length>0){ url+="&Gender=" + gender; }
    console.log(url);
    return this.http.get(url, {responseType: 'text'});
  }

  
  weather(){
    let searchtext = "select item.condition from weather.forecast where woeid =2390265"
    let url = "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=xml";
    return this.http.get(url, {responseType: 'text'});
  }

  games(startDate:Date){
    let start = startDate.getMonth()+1 + "/" + startDate.getDate();
    //Get all scores from 2 weeks ago to now
    //let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?startDate=" + start + "&eventtypes=Games";
    let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?startDate=" + "5/1" + "&eventtypes=Games";
    console.log(url);
    return this.http.get(url, {responseType: 'text'});
  }

  getSeason() {
    const url = "https://nobilis.nobles.edu/iosnoblesappweb/xmlAcademicYears.php?iosPIN="+ this.userPin;
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
