import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  image:string = this.DataProvider.Photo;

  myPin:string = this.DataProvider.userPin;

  menuPages: Array<{title: string, component: any, icon: string}>;
  otherPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public DataProvider: DataProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.menuPages = [
      
      {
        title: 'Schedule',
        component: 'SchedulePage',
        icon: 'md-clock'
      },
      { 
        title: 'Castle',
        component: 'CastlePage',
        icon: 'md-restaurant'
      },
      {
        title: 'Calendar',
        component: 'CalendarPage',
        icon: 'md-calendar'
      },
      { 
        title: 'Athletics',
        component: 'AthleticsPage',
        icon: 'md-american-football'
      },
      { 
        title: 'Directory',
        component: 'DirectoryPage',
        icon: 'md-people'
      }
    ];

    this.otherPages = [
      {
        title: 'Profile',
        component: 'MyProfilePage'
        
      },
      {
        title: 'View Person',
        component: 'ViewPersonPage'
      },
      {
        title: 'Reservation',
        component: 'ReservationPage'
      },
      {
        title: 'DirectoryList',
        component: 'DirectoryListPage'
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // if(localStorage.getItem['firstTimeLoad']!='TRUE'){
      //   localStorage.setItem['firstTimeLoad']='TRUE';
      //   this.rootPage='SchedulePage';
      // }
      // else{
      //     this.rootPage='SchedulePage';
      // }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
