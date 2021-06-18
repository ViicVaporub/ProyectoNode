import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AccesibilidadService } from '../service/accesibilidad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService, LoginComponent]
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  accesibilidad:AccesibilidadService; 

  constructor(private router: Router, private authSvc: AuthService, public valida:LoginComponent, private cacces:AccesibilidadService) { 
    this.accesibilidad = cacces;
  }

  async ngOnInit() {}
  
  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }catch(error){console.log(error);}
  }

  aparece(){
    this.cacces.a = !this.cacces.a;
  }

}
