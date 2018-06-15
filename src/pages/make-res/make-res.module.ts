import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeResPage } from './make-res';

@NgModule({
  declarations: [
    MakeResPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeResPage),
  ],
  exports: [
    MakeResPage
  ]
})
export class MakeResPageModule {}
