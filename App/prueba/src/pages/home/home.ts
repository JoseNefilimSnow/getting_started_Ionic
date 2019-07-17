import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BananaPage } from '../banana/banana';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  helloworld(){
    console.log("Whassupppp");
    this.navCtrl.push(BananaPage)
  }
}
