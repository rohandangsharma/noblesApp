import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, ViewController } from 'ionic-angular';
import { MakeResPage } from '../make-res/make-res';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  today = new Date;

  date:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.date = "";
    
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(MakeResPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  

  
  
    //public date = "" + this.today.getFullYear() + "-" + this.today.getMonth()+ + "-" + this.today.getDate();

  
  


}
