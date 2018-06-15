import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  pin:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  signIn(){
    this.dataProvider.userPin=this.pin;
    this.dataProvider.getUserData();
    this.navCtrl.setRoot("SchedulePage");
  }

  

}
