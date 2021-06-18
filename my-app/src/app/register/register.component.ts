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
  triedRegister:boolean;
  registerForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    user: new FormControl('',Validators.required),
    email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    pass: new FormControl('',Validators.required),
    cpass: new FormControl('',Validators.required)
  });
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  async onRegister(){
    
    try{
      //redirige a home 
     
    }catch(error){console.log(error);}   
  }
  
  validateRegister(form){
    const { email, pass } = this.registerForm.value;
    if(this.registerForm.get('pass').value == this.registerForm.get('cpass').value ){
      this.authSvc.register(email, pass);
      this.router.navigate(['/home']);
    }
  }


}
