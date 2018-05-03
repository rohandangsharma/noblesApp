import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the MakeResPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-res',
  templateUrl: 'make-res.html',
})
export class MakeResPage {

  today = new Date;

  date:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {
    this.date = "";
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeResPage');
  }

  submit(){
    if(this.date.length<1){
      alert("Please enter a valid date")
    }
    else{
      console.log(this.date);
      this.confirmRes();
      this.dismiss();
    }
  }

  confirmRes() {
    let toast = this.toastCtrl.create({
      message: 'Your Breakfast Reservation was confirmed!',
      duration: 3000,
      position: "bottom"
    });
    toast.present(toast);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
