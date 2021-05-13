import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from "@angular/fire";
import { WindowService } from "./window.service";
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  windowRef: any
  authState: any
  private firebaseApp: any
  captchaObserver: any
  captchaVerifiedObservable = new Observable<boolean>(observer => {
    this.captchaObserver = observer;
  });

  constructor(public win: WindowService
  ) {
    this.firebaseApp = firebase.initializeApp(environment.firebaseConfig);
    this.windowRef = this.win.windowRef;
    this.authState = null;
    this.firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authState = user;
      } else {
        this.authState = null;
      }
    });
  }

  getFireStore() {
    return firebase.firestore();
  }
  getCaptchaVerifier() {
    return new firebase.auth.RecaptchaVerifier('captchaDiv', {
      'callback': (response) => {
        this.captchaObserver.next(true);
        console.log('captchaVerified');
      },
      'expired-callback': () => {
        this.captchaObserver.next(false);
        console.log('captcha not Verified');
      }
    });
  }

  signInWithPhoneNumber(num, appVerifier) {
    this.firebaseApp.auth().signInWithPhoneNumber(num, appVerifier).then(result => {
      this.windowRef.confirmationResult = result;
    }).catch (error => console.log(error));
  }

  logOut() {
    this.firebaseApp.auth().signOut();
  }

  get isAuthenticated() {
    return this.authState != null;
  }
}
