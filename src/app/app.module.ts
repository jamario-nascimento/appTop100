import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';

// Import the AngularFire Module
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkHAMNGPb2-tTPe36wVviLWB0xLTMER8w",
  authDomain: "radio-top-100-fm.firebaseapp.com",
  projectId: "radio-top-100-fm",
  storageBucket: "radio-top-100-fm.appspot.com",
  messagingSenderId: "415336643532",
  appId: "1:415336643532:web:f4161c1b4321811845bb69",
  measurementId: "G-SQCHNH5BHX"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),            
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent],  
})
export class AppModule { }
