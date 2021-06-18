import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { WindowService } from '../window.service';
import { Router } from '@angular/router';

const config = {
  apiKey: "AIzaSyClbqv2m5xR3MTDFqBxACVRgNCQXNl8A1Q",
  authDomain: "inventario-7fb44.firebaseapp.com",
  databaseURL: "https://inventario-7fb44-default-rtdb.firebaseio.com/",
   projectId: "inventario-7fb44",
  storageBucket: "inventario-7fb44.appspot.com",
  messagingSenderId: "1024041023458",
};
export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area + this.prefix + this.line
    return `+${num}`
  }

}

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  windowRef: any;
  phone:any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;

  constructor(private router: Router,private win: WindowService) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef
     firebase.initializeApp(config)
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier
                  .render()
                  .then( widgetId => {

                    this.windowRef.recaptchaWidgetId = widgetId
    });
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth()
            .signInWithPhoneNumber(this.phone, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log('error', error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;
                    console.log(result);

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }

}
