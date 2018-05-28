import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  tab1: any
  tab2: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public DataProvider: DataProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.DataProvider.getSeason("mary65Mk");
  }

}

