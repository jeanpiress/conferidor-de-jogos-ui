import { Component } from '@angular/core';

@Component({
  selector: 'app-conusta-resultado',
  templateUrl: './conusta-resultado.component.html',
  styleUrls: ['./conusta-resultado.component.css']
})
export class ConustaResultadoComponent {
  title = 'conferidor-jogos-ui';
  numeros = [
  
     { numeroConcurso: '2320', resultado: '1, 2, 4, 6, 8, 9, 10, 12, 15, 16, 17, 19, 22, 23, 25'},
     
  ];
}
