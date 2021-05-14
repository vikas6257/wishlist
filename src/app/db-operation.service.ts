import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbOperationService {

  database = null;
  dbRef = null;
  constructor() {
    this.database = firebase.database();
    if (environment.production == false) {
      this.dbRef = this.database.ref('/test_database');
    } else {
      this.dbRef = this.database.ref('/prod_database');
    }
  }

  getDbSnapshot() {
    this.dbRef.get().then((snapshot) => {
      if (snapshot.exist()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    }).catch((err) => {
      console.error(err);
    });
  }
}
