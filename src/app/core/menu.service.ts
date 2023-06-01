import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  UltimosResultados = 'http://localhost:8080/resultados/ultimosResultados';
  constancia = 'http://localhost:8080/resultados/constancia';
  

   constructor(
    private http: HttpClient,
    private router: Router) { }

    presquisarUltimosResultados(): Observable<any>{
      return this.http.get(`${this.UltimosResultados}`);
     }

     presquisarConstancia(): Observable<any>{
      return this.http.get(`${this.constancia}`);
     }
}
