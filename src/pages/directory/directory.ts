import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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

  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.pageTitle = "Directory";
  }
  doSearch() {
    let temp = this.dataProvider.search(this.firstName, this.lastName);
    if(temp) {
      console.log('Student Found', this.firstName);
    }
  }
  reset() {
    this.firstName = '';
    this.lastName = '';
  }

}