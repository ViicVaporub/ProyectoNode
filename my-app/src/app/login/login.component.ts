import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    pass: new FormControl('',Validators.required),
  });
  admin: boolean = false ;

  constructor(public authSvc:AuthService, private router:Router, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  
  async onLogin(){
    const {email, pass } = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, pass);
      if(user) {
          //Rederige a la home
        this.router.navigate(['/home'])
        
        
      }    

    }catch(error){console.log(error);}
  }

  async valida(){
    try{
    const {email, pass } = this.loginForm.value;
    const user = this.authSvc.login(email,pass);
    if(user){
      if(email == "spartanliveds@gmail.com"){
        this.admin= true;
        alert(this.admin);
      }else{
        this.admin= false;
      }
    }
    return this.admin;
    }catch(error){console.log(error);}
  }

  
  




}
