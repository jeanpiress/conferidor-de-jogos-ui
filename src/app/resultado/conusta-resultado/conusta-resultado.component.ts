import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../resultados.service';


export class Resultado{

 
  numeroConcurso: number = 0;
  list:number[] = [];
 
  
  
  }
  


@Component({
  selector: 'app-conusta-resultado',
  templateUrl: './conusta-resultado.component.html',
  styleUrls: ['./conusta-resultado.component.css']
})
export class ConustaResultadoComponent implements OnInit{
  title = 'conferidor-jogos-ui';
  mostrarTabela: boolean = false;
  concurso = null;
  numeros =  new Resultado();

constructor(
  private resultadosService: ResultadosService
  
  
  ) {}
  ngOnInit(): void {
   }
  

pesquisarResultado(){
  this.mostrarTabela = true;
    this.resultadosService.pesquisarResultado({concurso: this.concurso})
     .subscribe(numeros => this.numeros = numeros);
     
     
}

}