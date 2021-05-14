import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WishlistFormComponent } from "../wishlist-form/wishlist-form.component";
import { DbOperationService } from '../db-operation.service'

interface wishlistinfo {
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
  wishlistData: wishlistinfo = {wishName:'', wishLink:'', wishDescript:''};
  wishList: wishlistinfo[] = [];
  isEditEnabled = false;

  constructor(private FirebaseAuth: FirebaseService,
    public dialog: MatDialog,
    public firebaseDb: DbOperationService
  ) {
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
    this.wishList.push({wishName: 'Iphone 11', wishLink: 'https://www.amazon.in/New-Apple-iPhone-11-128GB/dp/B08L8BJ9VC/ref=sr_1_1?dchild=1&keywords=iphone+11&qid=1620992485&sr=8-1', wishDescript:'New phone'});
  }

  ngOnInit(): void {
    console.log('User is authenticated? '+this.FirebaseAuth.isAuthenticated);
    this.isAuthenticated = this.FirebaseAuth.isAuthenticated;
    console.log(this.firebaseDb.getDbSnapshot());
  }


  addWish() {
    const dialogRef = this.dialog.open(WishlistFormComponent, {
      width: '500px',
      data: {wishName: this.wishlistData.wishName,
        wishLink: this.wishlistData.wishLink,
        wishDescript: this.wishlistData.wishDescript}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.wishlistData.wishName = result.wishName;
      this.wishlistData.wishLink = result.wishLink;
      this.wishlistData.wishDescript = result.wishDescript;
      this.wishList.push({wishName: result.wishName,
        wishLink: result.wishLink, wishDescript: result.wishDescript});
    });
  }
}
