import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data"

/**
 * Generated class for the ViewPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-person',
  templateUrl: 'view-person.html',
})
export class ViewPersonPage {
  hello:string = "hellO";

  constructor(public navCtrl: NavController, public navParams: NavParams, public DataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    var pin = "mary65Mk";
    console.log('ionViewDidLoad ViewPersonPage');
    this.DataProvider.getDataFromApi(pin);
    this.getInfo();
  }

  getInfo(){
    console.log(this.DataProvider.FirstName);
    console.log(this.DataProvider.PersonType);
    console.log(this.DataProvider.FirstName);
    console.log(this.DataProvider.UNID);
    console.log(this.DataProvider.PeopleID);
    console.log(this.DataProvider.MACNum);
    console.log(this.DataProvider.MACCombo);
    console.log(this.DataProvider.ShattuckNum);
    console.log(this.DataProvider.ShattuckCombo);
    console.log(this.DataProvider.MSCubbyNum);
    console.log(this.DataProvider.MSCubbyCombo);
    console.log(this.DataProvider.AssemblySeat);
  }

  apiUrlPrefix: string = "https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=";

  
  
  

  



}
