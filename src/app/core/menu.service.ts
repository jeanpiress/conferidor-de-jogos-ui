import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  UltimosResultados: string;
  constancia3: string;
  constancia4: string;
  

   constructor(
    private http: HttpClient,
    private router: Router,)
     {
      this.UltimosResultados = `${environment.apiUrl}/resultados/ultimosResultados`; 
      this.constancia3 = `${environment.apiUrl}/resultados/constancia3`;
      this.constancia4 = `${environment.apiUrl}/resultados/constancia`;
       
    }

    presquisarUltimosResultados(): Observable<any>{
      return this.http.get(`${this.UltimosResultados}`);
     }

     presquisarConstancia4(): Observable<any>{
      return this.http.get(`${this.constancia4}`);
     }
     presquisarConstancia3(): Observable<any>{
      return this.http.get(`${this.constancia3}`);
     }
}
