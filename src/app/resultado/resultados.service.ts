import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { HttpParams } from '@angular/common/http';



import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { ResultadoCadastro } from './resultados/resultados.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  resultadosUrl = 'http://localhost:8080/resultados';

  constructor(
    private http: HttpClient,
    private router: Router) { }


  pesquisarResultado(filtro: any): Observable<any>{
    const params = new HttpParams();
    
    
    params.set('concurso', filtro.concurso);
    
    
    return this.http.get(`${this.resultadosUrl}/concurso/${filtro.concurso}`, { params })
    .pipe(map((response: any) => response),
    catchError(error => {
      if (error.status === 401) {
        this.router.navigate(['/login']);
      } else {
        return throwError('Erro no servidor, tente novamente mais tarde!');
      }

      
      return throwError(error);
    }));
   

  }

  adicionarResultado(resultado: ResultadoCadastro) : Observable<ResultadoCadastro>{
  
    return this.http.post(this.resultadosUrl, resultado)
    .pipe(map((response: any) => response),
    catchError(error => {
      if (error.status === 401) {
        this.router.navigate(['/login']);
      } else {
        return throwError('Erro no servidor, tente novamente mais tarde!');
      }

      
      return throwError(error);
    }));
    
  }

}
