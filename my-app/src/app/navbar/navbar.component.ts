import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private router: Router, private authSvc: AuthService) { }

  async ngOnInit() {}
  
  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }catch(error){console.log(error);}
  }

}
