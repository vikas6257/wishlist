import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent implements OnInit {

  isAuthenticated = false;

  constructor(private FirebaseAuth: FirebaseService) { }

  ngOnInit(): void {
    console.log('User is authenticated? '+this.FirebaseAuth.isAuthenticated);
    this.isAuthenticated = this.FirebaseAuth.isAuthenticated;
  }
  isUserAuthenticated() {
    console.log('User is authenticated? '+this.FirebaseAuth.isAuthenticated);
  }
}
