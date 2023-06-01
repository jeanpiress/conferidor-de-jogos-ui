import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 constructor(public auth: AuthService, 
  private router: Router){}
 
 
  exibindoMenu: boolean = false;

  criarNovoAccessToken(){
   
  this.auth.obterNovoAccessToken();
  }

  logout(){
    this.auth.logout()
    .subscribe(() => this.router.navigate(['/login']));
  }
}
