import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdlistPage } from './prodlist';

@NgModule({
  declarations: [
    ProdlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdlistPage),
  ],
})
export class ProdlistPageModule {}
