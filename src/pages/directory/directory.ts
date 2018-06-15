import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
// import { DirectoryListPage } from '../directory-list/directory-list';
import { METHODS } from 'http';

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html'
})
export class DirectoryPage {
 
  pageTitle: string;
  firstName: string = "";
  lastName: string = "";
  sport: string = "";
  gender: string = "";
  class: string = "";
  personType:string = "Student";

  filteredPeople = [];

  searchData: Array<string>;

  url:string = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlDirectory.php?iosPIN=" + "mary65Mk" + "&PersonType=" + this.personType;


  constructor(public navCtrl: NavController, public dataProvider: DataProvider, public http: HttpClient) {
    this.pageTitle = "Directory";
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
  }

  getDirectoryData() {
    this.filteredPeople=[];
    this.dataProvider.search( this.personType, this.firstName, this.lastName, this.gender).subscribe(output=>{
      let parser = new DOMParser();
      let doc = parser.parseFromString(output, "text/xml");
      let len = doc.documentElement.childNodes.length;

      for (var i=0; i<len; i++){
        let curr = this.filteredPeople[i] = doc.getElementsByTagName("Person")[i];
        this.filteredPeople[i] = curr;
      }
      console.log(this.filteredPeople);
    }, (error)=>{
      console.log('errors', error);
      
    });
    this.showList();
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
  }

  showList(){
    this.searchData= [this.firstName, this.lastName, this.gender, this.sport, this.class];
    this.navCtrl.push("DirectoryListPage", {
      result: this.filteredPeople
    });
  } 
}