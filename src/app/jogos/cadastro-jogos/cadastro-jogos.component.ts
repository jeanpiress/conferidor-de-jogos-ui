import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JogosService } from '../jogos.service';
import { MatSnackBar } from '@angular/material/snack-bar';




export class Usuario{
  id: number = 0;
  }

export class Jogo{

 
  numeroConcurso: number = 0;
  list: number = 0;
 
  
  usuario: Usuario = new Usuario();
  }
 

 @Component({
  selector: 'app-cadastro-jogos',
  templateUrl: './cadastro-jogos.component.html',
  template: '<button (click)="openSnackbar()">Mostrar Snackbar</button>',
  styleUrls: ['./cadastro-jogos.component.css']
})
export class CadastroJogosComponent {
    
constructor(
  private JogosService: JogosService,
  private snackBar: MatSnackBar

){}



  jogo = new Jogo();

 

  cadastrar(form: NgForm) {
       
    console.log(form)
   
    form.reset();

  }


    
  salvar(form: NgForm){
  this.JogosService.adicionar(this.jogo)
 .subscribe(() => {this.snackBar.open('Jogo cadastrado', 'Fechar', {
  duration: 3000, // duração em milissegundos
});})
 form.reset();
 this.jogo = new Jogo();
 
}



}
