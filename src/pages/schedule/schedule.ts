import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  openCalendar() {
    let alert = this.alertCtrl.create({
      title: 'Calendar Opened',
      subTitle: 'Your calendar will open now',
      buttons: ['OK']
    });
    alert.present();
  }
}
