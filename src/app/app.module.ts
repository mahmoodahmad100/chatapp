import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBTVkMjAWa48YAiHy-ZVBnGnmF4kmvR6hQ",
    authDomain: "chatapp-af407.firebaseapp.com",
    databaseURL: "https://chatapp-af407.firebaseio.com",
    projectId: "chatapp-af407",
    storageBucket: "chatapp-af407.appspot.com",
    messagingSenderId: "2695665271"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
