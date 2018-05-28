import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
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

  person = this.navParams.data.person;

  PeopleID = this.person.id;
  FirstName = this.person.children[1].innerHTML;
  LastName = this.person.children[0].innerHTML;
  Address = this.person.children[7].innerHTML + ", " + this.person.children[9].innerHTML + ", " + this.person.children[10].innerHTML;
  Email = this.person.children[2].innerHTML;
  Cell = this.person.children[3].innerHTML;
  Home = this.person.children[4].innerHTML;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DataProvider: DataProvider, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    var pin = "mary65Mk";
    console.log('ionViewDidLoad ViewPersonPage');
    this.DataProvider.getDataFromApi(pin);
    this.getInfo();
    console.log(this.navParams.data.person);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getInfo(){
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
