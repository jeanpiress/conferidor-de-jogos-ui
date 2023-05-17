import { Component, OnInit } from '@angular/core';
import { JogosService } from '../jogos.service';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/seguranca/auth.service'




@Component({
  selector: 'app-meus-jogos',
  templateUrl: './meus-jogos.component.html',
  styleUrls: ['./meus-jogos.component.css']
})
export class MeusJogosComponent implements OnInit {
  title = 'conferidor-jogos-ui';
  concurso = null;
  usuario =  parseInt(this.auth.jwtPayload?.user_info.id);
  numeros = [];

  constructor(
    private jogosService: JogosService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    public auth: AuthService
    ) {}

 
    ngOnInit(): void {
    const codigoJogo = this.route.snapshot.params['id'];
    }
  

  pesquisar(){
    this.jogosService.pesquisar({concurso: this.concurso, usuario: this.usuario})
       .subscribe(numeros => this.numeros = numeros);
  }

  confirmarExclusao(numeros: any){
    this.confirmation.confirm({
      message: 'Deseja mesmo excluir este jogo?',
      accept: () => {
        this.excluir(numeros);
      }
    });
  }

  excluir(numeros: any){
   
    this.jogosService.excluir(numeros.id)
    .subscribe(() => { this.pesquisar();});
  }

  pesquisarPorId(id: number){
    this.jogosService.pesquisarPorId(this.route.snapshot.params['id'])
       .subscribe(numeros => this.numeros = numeros);
  }
  
}
