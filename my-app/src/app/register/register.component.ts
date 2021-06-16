import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    pass2: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log('Form->',this.registerForm.value);
  }
}
