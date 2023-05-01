import { Component } from '@angular/core';
import { ResultadosService } from '../resultados.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

export class ResultadoCadastro{

 
  numeroConcurso: number = 0;
  list: number = 0;
 
  
   }

   @Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  template: '<button (click)="openSnackbar()">Mostrar Snackbar</button>',
  styleUrls: ['./resultados.component.css']
})


export class ResultadosComponent {

  constructor(
    private ResultadosService: ResultadosService,
    private snackBar: MatSnackBar
  
  ){}

  resultadoCadastro = new ResultadoCadastro();


  salvarResultado(form: NgForm){
    this.ResultadosService.adicionarResultado(this.resultadoCadastro)
   .subscribe(() => {this.snackBar.open('Resultado cadastrado', 'Fechar', {
    duration: 3000, // duração em milissegundos
  });})
   form.reset();
   this.resultadoCadastro = new ResultadoCadastro();
   
  }
}
