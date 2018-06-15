import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CastlePage } from './castle';
import { ReservationPage } from '../reservation/reservation';

@NgModule({
  declarations: [
    CastlePage,
  ],
  imports: [
    IonicPageModule.forChild(CastlePage),
  ],
  exports: [
    CastlePage
  ]
})
export class CastlePageModule {}
