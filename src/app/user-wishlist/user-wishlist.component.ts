import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WishlistFormComponent } from "../wishlist-form/wishlist-form.component";
import { DbOperationService } from '../db-operation.service'

interface wishlistinfo {
  key?: string;
  wishName: any;
  wishLink: any;
  wishDescript: any;
}

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent implements OnInit {

  isAuthenticated = false;
  wishlistData: wishlistinfo = {'wishName': '', 'wishLink': '', 'wishDescript': ''};
  wishList: wishlistinfo[] = [];
  isEditEnabled = false;
  dbData: any;

  constructor(private firebaseAuth: FirebaseService,
    public dialog: MatDialog,
    public firebaseDb: DbOperationService,
  ) {}

  ngOnInit(): void {
    this.firebaseDb.dbSnapshotForUserObservble.subscribe((res) => {
      this.dbData = res;
      this.dbData.forEach((childSnapshot) => {
        var snapVal = childSnapshot.val();
        this.wishList.push({
          key: childSnapshot.key,
          wishName: snapVal.wishName,
          wishLink: snapVal.wishLink,
          wishDescript: snapVal.wishDescript
        });
      });
    });
    this.firebaseAuth.isAuthObservable.subscribe((res) => {
      this.isAuthenticated = res;
      this.firebaseDb.getDbSnapshotForUser(this.firebaseAuth.authState.uid);
    });
  }


  addWish() {
    const dialogRef = this.dialog.open(WishlistFormComponent, {
      width: '500px',
      data: {wishName: this.wishlistData.wishName,
        wishLink: this.wishlistData.wishLink,
        wishDescript: this.wishlistData.wishDescript}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.wishlistData.wishName = result.wishName;
      this.wishlistData.wishLink = result.wishLink;
      this.wishlistData.wishDescript = result.wishDescript;
      this.wishList.push({wishName: result.wishName,
        wishLink: result.wishLink, wishDescript: result.wishDescript});
      this.firebaseDb.writeToDB(this.firebaseAuth.authState.uid,
        {wishName: result.wishName,
          wishLink: result.wishLink,
          wishDescript: result.wishDescript});
    });
  }
}
