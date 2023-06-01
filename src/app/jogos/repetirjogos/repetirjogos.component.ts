import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/auth.service';
import { JogosService } from '../jogos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-repetirjogos',
  templateUrl: './repetirjogos.component.html',
  styleUrls: ['./repetirjogos.component.css']
})
export class RepetirjogosComponent {

  concursoBase = null;

  concursoEspelho = null;

  usuario = parseInt(this.auth.jwtPayload?.user_info.id);
 
  

  constructor(
    private JogosService: JogosService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
    
  
  ){}

  espelhar(form: NgForm){
    this.JogosService.espelhar({concursoBase: this.concursoBase, concursoEspelho: this.concursoEspelho, usuario: this.usuario})
   .subscribe(() => {this.snackBar.open('Jogo refeito com sucesso', 'Fechar', {
    duration: 3000, // duração em milissegundos
  });}),
  
   form.reset();
   
     
  }
  
}
