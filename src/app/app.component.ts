import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  isHidden = true;

  constructor(
private router: Router
  ){}

  toggleClass() {
    this.isHidden = !this.isHidden;
  }

  exibirNavbar(){
    return this.router.url !== '/login';
  }
}
