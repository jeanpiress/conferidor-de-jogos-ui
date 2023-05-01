import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(
  private usuarioService: UsuarioService,
  private snackBar: MatSnackBar
  ){}
    
  usuario = new Usuario();
  


  salvarUsuario(form: NgForm){
    this.usuarioService.adicionarUsuario(this.usuario)
   .subscribe(() => {this.snackBar.open('Usuario cadastrado', 'Fechar', {
    duration: 3000, // duração em milissegundos
  });})
   form.reset();
   this.usuario = new Usuario();
   
  }
  

}
