import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FirebaseService } from "../firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public auth: FirebaseService,
  ) { }

  ngOnInit(): void {
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Login component closed');
    });
  }
}
