import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public user : any ;
  constructor(private router: Router, private authSvc: AuthService) { }

  async ngOnInit() {
    console.log('Navbar');
    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged = true;
    }
  }
  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }catch(error){console.log(error);}
  }

}
