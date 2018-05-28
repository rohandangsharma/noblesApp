import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AthleticsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athletics',
  templateUrl: 'athletics.html'
})
export class AthleticsPage {

  mySportsRoot = 'MySportsPage'
  scoresRoot = 'ScoresPage'
  upcomingRoot = 'UpcomingPage'

  constructor(public navCtrl: NavController) {
  }
  
  
}
