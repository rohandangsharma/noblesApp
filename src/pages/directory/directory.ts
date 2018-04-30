import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';

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

  constructor(public navCtrl: NavController, public dataProvider: DataProvider, public http: HttpClient) {
    this.pageTitle = "Directory";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
    this.dataProvider.getDataFromApi("mary65Mk");
  }

  doSearch() {
    //let temp = this.dataProvider.search(this.firstName, this.lastName);
    // if(temp) {
    //   console.log('Student Found', this.firstName);
    // }
  }

  

  

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
    this.sport = '';
    this.class = '';
  }

}