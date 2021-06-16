import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl(''),
    lname: new FormControl(''),
    user: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl(''),
  });
  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
  }
  onRegister(){
   const { email, pass } = this.registerForm.value;
   this.authSvc.register(email, pass);
  }
}
