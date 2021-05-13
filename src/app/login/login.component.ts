import { Component, OnInit, Inject } from '@angular/core';
import { WindowService } from '../window.service';
import {FormControl, Validators} from '@angular/forms';
import { FirebaseService } from '../firebase.service'
import { Observable } from "rxjs"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  windowRef: any;
  phoneNumber = new FormControl('', [Validators.required,
                                     Validators.minLength(10),
                                     Validators.maxLength(10)]);
  verificationCode: string;
  user: string
  captchaVerified = false

  constructor(private win: WindowService,
    private firebaseService: FirebaseService,
  ) {
    this.verificationCode = '';
    this.user = '';
    this.firebaseService.captchaVerifiedObservable.subscribe(res => {
      this.captchaVerified = res;
    });
  }

  ngOnInit(): void {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = this.firebaseService.getCaptchaVerifier()
    this.windowRef.recaptchaVerifier.render()
  }

  sendOneTimePass() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = '+91'+this.phoneNumber.value;
    this.firebaseService.signInWithPhoneNumber(num, appVerifier)
  }

  verifyOneTimePass() {
    this.windowRef.confirmationResult.confirm(this.verificationCode).then(result => {
      this.user = result.user;
    }).catch(error => console.log(error));
  }
}
