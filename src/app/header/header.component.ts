import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../firebase.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: FirebaseService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logOut();
  }
  AboutUs() {
    alert('Please write to: vik6257@gmail.com');
  }
}
