import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApilinkProvider } from '../../providers/apilink/apilink';

/**
 * Generated class for the BananaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banana',
  templateUrl: 'banana.html',
})
export class BananaPage {
  private labelStatus="Esto es una etiqueta";
  constructor(public navCtrl: NavController, public navParams: NavParams, public apilink:ApilinkProvider) {
  }

  showStatus(){
    let status;
    this.apilink.getStatus().then((res:any)=>{
      console.log(res);
      status=JSON.parse(res);
      this.labelStatus=status.body;
    }).catch(error=>{
      console.log(error);
      this.labelStatus = "Error";
    })
  }

}
