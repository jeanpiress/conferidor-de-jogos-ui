import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  numeros = [];
  constancia = { numerosRepetidos: null, numerosNaoRepetidos: null };

  constructor(
    private menuservice: MenuService,
    private router: Router
    
    ) {}

    ngOnInit(): void {
     this.pesquisarConstancia();
     this.pesquisarResultados();
    }

    pesquisarResultados(){
      this.menuservice.presquisarUltimosResultados()
         .subscribe(numeros => this.numeros = numeros,
          error => {
            console.error(error);
            this.router.navigate(['/login']);});
    }

    pesquisarConstancia(){
      this.menuservice.presquisarConstancia()
         .subscribe(constancia => this.constancia = constancia);
    }  
}
