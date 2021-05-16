import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class DbOperationService {

  database = null;
  dbRef = null;
  dbSnapshotForUserObserver: any;
  dbSnapshotForUserObservble = new Observable<any>(observer => {
    this.dbSnapshotForUserObserver = observer;
  });

  constructor() {
    this.database = firebase.database();
    if (environment.production == false) {
      this.dbRef = this.database.ref().child('/test_database').child('/users');
    } else {
      this.dbRef = this.database.ref().child('/prod_database').child('/users');
    }
  }

  getDbSnapshotForUser(uid) {
    this.dbRef.child(uid).get().then((snapshot) => {
      if (snapshot.exists()) {
        this.dbSnapshotForUserObserver.next(snapshot);
      } else {
        console.log('No data available');
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  writeToDB(uid, data) {
    var key = this.dbRef.child(uid).push().key;
    this.dbRef.child(uid).child(key).set(data);
    return key;
  }

  removeFromDb(uid, listKey) {
    this.dbRef.child(uid).child(listKey).remove()
  }

  updateDbUserList(uid, listKey, data) {
    this.dbRef.child(uid).child(listKey).update(data)
  }
}
