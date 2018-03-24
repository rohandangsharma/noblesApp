import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CastlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-castle',
  templateUrl: 'castle.html',
})

export class CastlePage {
  day: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    let today = new Date();
    let weekday = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
    let dayOfWeek = weekday[today.getDay()];  
    if(dayOfWeek!=weekday[0] || dayOfWeek!=weekday[6]){
      this.day=dayOfWeek;
    }
    else{
      this.day="monday";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CastlePage');
  }

}
// function ($scope, $stateParams) {
//   $scope.today = $scope.dayOfWeek;
//   $scope.activeDay = $scope.today;
  
//   $scope.changeDay = function(s) {
//       $scope.activeDay = s;
//   };
// }

