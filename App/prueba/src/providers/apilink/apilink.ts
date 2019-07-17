import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApilinkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApilinkProvider {

  constructor(public http: HttpClient) {
    
  }

  getStatus(){
    return this.http.get("http://192.168.1.35:3000/status").toPromise();
  }

}
