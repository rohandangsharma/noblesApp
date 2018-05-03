import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { DirectoryListPage } from '../directory-list/directory-list';
import { METHODS } from 'http';

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html'
})
export class DirectoryPage {
 
  pageTitle: string;
  firstName: string;
  lastName: string;
  sport: string;
  gender: string;
  class: string;

  searchData: Array<string>;

  personType:string = "Student";

  url:string = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlDirectory.php?iosPIN=" + "mary65Mk" + "&PersonType=" + this.personType;


  constructor(public navCtrl: NavController, public DataProvider: DataProvider, public http: HttpClient) {
    this.pageTitle = "Directory";
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
    this.search();
    
  }

  search(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(xhttp.responseText, "text/xml");
        let personCount = doc.documentElement.childNodes.length;
        let lasts = new Array;
        let firsts = new Array;
        let grades = new Array;
        let addresses = new Array;
        let cities = new Array;
        let phoneNums = new Array;
        for (var i=0; i<personCount; i++){
          //var hello = doc.getElementById("27802").getElementsByTagName("Last")[0].textContent;
          firsts[i] = doc.getElementsByTagName("Person")[i].getElementsByTagName("First")[0].firstChild.nodeValue;
          console.log(doc.getElementsByTagName("Person")[i].getAttribute('id'));
          // lasts[i] = doc.getElementsByTagName("Person")[i].getElementsByTagName("Last")[0].firstChild.nodeValue;
          // grades[i] = doc.getElementsByTagName("Person")[i].getElementsByTagName("StudentGrade")[0].firstChild.nodeValue;
          // cities[i] = doc.getElementsByTagName("Person")[i].getElementsByTagName("City")[0].firstChild.nodeValue;
          // addresses[i] = doc.getElementsByTagName("Person")[i].getElementsByTagName("Street1")[0].firstChild.nodeValue;
          // phoneNums[i] = doc.getElementsByTagName("Person")[i].getElementsByTagName("PhoneCell")[0].firstChild.nodeValue;

          //var title = doc.getElementsByTagName("Person")[i].getElementsByTagName("Last")[0].textContent;
          
          //console.log(title);
          //document.getElementById(day).innerHTML= this.responseText;
        }
        // console.log(firsts);
        // console.log(addresses);
      }
      
    };
    
    xhttp.open("GET", this.url, true);
    xhttp.send(null);
  } 

  setPersonType(type:string){
    this.personType = type;
    console.log(this.personType);
  }

reset() {
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
    this.sport = '';
    this.class = '';
    this.showList();
  }

  showList(){
    this.searchData= [this.firstName, this.lastName, this.gender, this.sport, this.class];
    this.navCtrl.push(DirectoryListPage);
  }

  
}
