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

  PeopleID:string = this.person.id;
  FirstName:String = this.person.children[1].innerHTML;
  LastName:String = this.person.children[0].innerHTML;
  Address:string = this.person.children[7].innerHTML + ", " + this.person.children[9].innerHTML + ", " + this.person.children[10].innerHTML;
  Email:string = this.person.children[2].innerHTML;
  Cell:string = this.person.children[3].innerHTML;
  Home:string = this.person.children[4].innerHTML;

  showName:boolean=true;
  showAdd:boolean=true;
  showEmail:boolean=true;
  showCell:boolean=true;
  showHome:boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public viewCtrl: ViewController) {
    if(this.FirstName.length+this.LastName.length==0){this.showName=false;}
    if(this.Address.length==0){this.showAdd=false;}
    if(this.Email.length==0){this.showEmail=false;}
    if(this.Cell.length==0){this.showCell=false;}
    if(this.Home.length==0){this.showHome=false;}
  }

  ionViewDidLoad() {
    var pin = "mary65Mk";
    console.log('ionViewDidLoad ViewPersonPage');
    //this.dataProvider.getUserPrivate(pin);
    console.log(this.navParams.data.person);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  apiUrlPrefix: string = "https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=";

}
