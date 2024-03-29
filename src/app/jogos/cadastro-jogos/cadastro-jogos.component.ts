import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { JogosService } from '../jogos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/auth.service';




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
export class CadastroJogosComponent implements OnInit{
  
  jogo = new Jogo();
 
  

constructor(
  private JogosService: JogosService,
  private snackBar: MatSnackBar,
  private route: ActivatedRoute,
  private auth: AuthService,
  private router: Router
  

){}



ngOnInit(): void {
 
  this.jogo.usuario.id = parseInt(this.auth.jwtPayload?.user_info.id);

}

  
get editando(){
  return Boolean(this.jogo.usuario.id) 
}

carregarJogo(id: number){
    this.JogosService.pesquisarPorId(id)
    .subscribe(jogo => this.jogo = jogo);
 }

salvar(form: NgForm){
  this.JogosService.adicionar(this.jogo)
 .subscribe(() => {this.snackBar.open('Jogo cadastrado', 'Fechar', {
  duration: 3000, // duração em milissegundos
});}),

  this.jogo = new Jogo();
  
  this.router.navigate(['menu']);
}





}
