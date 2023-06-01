import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export class Usuario{
  nome: string = "";
  email: string = "";
  senha: string = "";

  }

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  template: '<button (click)="openSnackbar()">Mostrar Snackbar</button>',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  mensagemErro: string = '';
  constructor(
  private usuarioService: UsuarioService,
  private snackBar: MatSnackBar,
  private router: Router
  ){}
    
  usuario = new Usuario();
  


  salvarUsuario(form: NgForm){
    this.usuarioService.adicionarUsuario(this.usuario)
   .subscribe(() => {this.router.navigate(['/login'])},
  error => {
    console.log('Email já cadastrado', error);
    this.mensagemErro = error;
    // exibir uma mensagem de erro na tela
  })
   form.reset();
   this.usuario = new Usuario();
   
  }
  

}
