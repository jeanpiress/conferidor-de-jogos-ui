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
  constancia3 = { numerosRepetidos: null, numerosNaoRepetidos: null };
  constancia4 = { numerosRepetidos: null, numerosNaoRepetidos: null };

  constructor(
    private menuservice: MenuService,
    private router: Router
    
    ) {}

    ngOnInit(): void {
      this.pesquisarConstancia3();
     this.pesquisarConstancia4();
     this.pesquisarResultados();
    }

    pesquisarResultados(){
      this.menuservice.presquisarUltimosResultados()
         .subscribe(numeros => this.numeros = numeros,
          error => {
            console.error(error);
            this.router.navigate(['/login']);});
    }

    pesquisarConstancia3(){
      this.menuservice.presquisarConstancia3()
         .subscribe(constancia3 => this.constancia3 = constancia3);
    } 
   
    pesquisarConstancia4(){
      this.menuservice.presquisarConstancia4()
         .subscribe(constancia4 => this.constancia4 = constancia4);
    }  
}
