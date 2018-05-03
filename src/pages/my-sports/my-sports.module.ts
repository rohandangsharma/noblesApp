import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySportsPage } from './my-sports';

@NgModule({
  declarations: [
    MySportsPage,
  ],
  imports: [
    IonicPageModule.forChild(MySportsPage),
  ],
})
export class MySportsPageModule {}
