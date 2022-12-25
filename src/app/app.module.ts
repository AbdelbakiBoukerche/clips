import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { UserModule } from './user/user.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCXOpvBmHWOV_f37D85uFcUmryz8FNtTXE",
      authDomain: "clips-404b4.firebaseapp.com",
      projectId: "clips-404b4",
      storageBucket: "clips-404b4.appspot.com",
      messagingSenderId: "32155359456",
      appId: "1:32155359456:web:ca8859f20dc6a1688d5885"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
