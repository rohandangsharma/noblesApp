import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';

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

  hello:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryListPage');
  }

  

}
