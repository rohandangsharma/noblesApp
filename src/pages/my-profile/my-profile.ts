import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  infoType='public';

  showName:boolean=true;
  showAdd:boolean=true;
  showEmail:boolean=true;
  showCell:boolean=true;
  showHome:boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    if(dataProvider.FirstName.length+dataProvider.LastName.length==0){this.showName=false;}
    if(dataProvider.Address.length==0){this.showAdd=false;}
    if(dataProvider.Email.length==0){this.showEmail=false;}
    if(dataProvider.Cell.length==0){this.showCell=false;}
    if(dataProvider.Home.length==0){this.showHome=false;}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

}
