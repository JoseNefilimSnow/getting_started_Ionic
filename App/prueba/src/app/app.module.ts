import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BananaPage } from '../pages/banana/banana';
import { ApilinkProvider } from '../providers/apilink/apilink';
import { HttpClientModule } from '@angular/common/http';
import { ProdlistPage } from '../pages/prodlist/prodlist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BananaPage,
    ProdlistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BananaPage,
    ProdlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApilinkProvider
  ]
})
export class AppModule {}
