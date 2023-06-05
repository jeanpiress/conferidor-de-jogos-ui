import { Component, OnInit } from '@angular/core';
import { JogosService } from '../jogos.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/seguranca/auth.service'

@Component({
  selector: 'app-conferencia-jogos',
  templateUrl: './conferencia-jogos.component.html',
  styleUrls: ['./conferencia-jogos.component.css']
})
export class ConferenciaJogosComponent implements OnInit{
  title = 'conferidor-jogos-ui';
  concurso = null;
  usuario = parseInt(this.auth.jwtPayload?.user_info.id);
  numerosBatidos = [];
  listaVazia = [];

  constructor(
    private jogosService: JogosService,
    public auth: AuthService
    
  ){}

  ngOnInit(): void {
    
  }

  limparlista(){
    return this.numerosBatidos = [];
  }

  pesquisarBatidos(){
    this.limparlista();
    
    this.jogosService.pesquisarBatidos({concurso: this.concurso, usuario: this.usuario})
       .subscribe(numerosBatidos => this.numerosBatidos = numerosBatidos);
       
  }


}
