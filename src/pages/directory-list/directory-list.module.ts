import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectoryListPage } from './directory-list';

@NgModule({
  declarations: [
    DirectoryListPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectoryListPage),
  ],
})
export class DirectoryListPageModule {}
