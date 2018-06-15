import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
// import { ViewPersonPage } from '../view-person/view-person';

/**
 * Generated class for the DirectoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directory-list',
  templateUrl: 'directory-list.html',
})
export class DirectoryListPage {

  people:Array<String>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DataProvider: DataProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryListPage');
    this.people = this.navParams.data.result;
    console.log(this.people);
  }

  openModal(p) {

    let modal = this.modalCtrl.create("ViewPersonPage", { person: p });
    modal.present();
  }
}
