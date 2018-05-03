import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataProvider } from '../providers/data/data';

//pages
import { SchedulePage } from '../pages/schedule/schedule';
import { DirectoryPage } from '../pages/directory/directory';
import { AthleticsPage } from '../pages/athletics/athletics';
import { CalendarPage } from '../pages/calendar/calendar';
import { CastlePage } from '../pages/castle/castle';
import { ViewPersonPage } from '../pages/view-person/view-person';
import { ReservationPage } from '../pages/reservation/reservation';
import { DirectoryListPage } from '../pages/directory-list/directory-list';
import { MakeResPage } from '../pages/make-res/make-res';

@NgModule({
  declarations: [
    MyApp,
    ReservationPage,
    DirectoryListPage,
    MakeResPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReservationPage,
    DirectoryListPage,
    MakeResPage,
  ],
  providers: [
    StatusBar,  
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
