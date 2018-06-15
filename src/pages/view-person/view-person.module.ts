import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPersonPage } from './view-person';

@NgModule({
  declarations: [
    ViewPersonPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPersonPage),
  ],
  exports: [
    ViewPersonPage
  ]
})
export class ViewPersonPageModule {}
