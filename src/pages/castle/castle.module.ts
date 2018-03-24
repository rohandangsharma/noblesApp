import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CastlePage } from './castle';

@NgModule({
  declarations: [
    CastlePage,
  ],
  imports: [
    IonicPageModule.forChild(CastlePage),
  ],
})
export class CastlePageModule {}
