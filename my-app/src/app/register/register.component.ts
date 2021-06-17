import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    user: new FormControl('',Validators.required),
    email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    pass: new FormControl('',Validators.required),
  });
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  async onRegister(){
    const { email, pass } = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, pass);
      //redirige a home 
      this.router.navigate(['/home']);
    }catch(error){console.log(error);}
   
  
  }
}
