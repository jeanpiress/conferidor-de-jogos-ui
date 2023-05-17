import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { catchError, throwError } from 'rxjs';
import { Route, Router } from '@angular/router';





@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  mensagemErro: string = '';
  
  constructor(
  public auth: AuthService,
  private router: Router
    ){}
   
    ngOnInit(): void {
    }
  
    login(usuario: string, senha: string) {
  this.auth.login(usuario, senha).subscribe(
  () => {
   this.router.navigate(['/menu']);
  },
  error => {
    console.log('Ocorreu um erro ao realizar o login:', error);
    this.mensagemErro = error;
    // exibir uma mensagem de erro na tela
  }
);
   }   
  
}


