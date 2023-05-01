import { Component } from '@angular/core';
import { JogosService } from '../jogos.service';

@Component({
  selector: 'app-conferencia-jogos',
  templateUrl: './conferencia-jogos.component.html',
  styleUrls: ['./conferencia-jogos.component.css']
})
export class ConferenciaJogosComponent {
  title = 'conferidor-jogos-ui';
  concurso = null;
  usuario = null;
  numerosBatidos = [];

  constructor(
    private jogosService: JogosService
  ){}

  pesquisarBatidos(){
    this.jogosService.pesquisarBatidos({concurso: this.concurso, usuario: this.usuario})
       .subscribe(numerosBatidos => this.numerosBatidos = numerosBatidos);
       
  }


}
