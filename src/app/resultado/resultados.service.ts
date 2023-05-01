import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { HttpParams } from '@angular/common/http';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ResultadoCadastro } from './resultados/resultados.component';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  resultadosUrl = 'http://localhost:8080/resultados';

  constructor(private http: HttpClient) { }


  pesquisarResultado(filtro: any): Observable<any>{
    const params = new HttpParams();
    const headers = new HttpHeaders().set('Authorization', 'Basic amVhbkBnbWFpbDpzZW5oYTEyMw==');
    
    
    params.set('concurso', filtro.concurso);
    
    
    return this.http.get(`${this.resultadosUrl}/concurso/${filtro.concurso}`, { headers, params })
    .pipe(map((response: any) => response));
   

  }

  adicionarResultado(resultado: ResultadoCadastro) : Observable<ResultadoCadastro>{
    let headers = new HttpHeaders().set('Authorization', 'Basic amVhbkBnbWFpbDpzZW5oYTEyMw==');
    headers = headers.set('content-Type', 'application/json');
   
    return this.http.post(this.resultadosUrl, JSON.stringify(resultado), {headers})
    .pipe(map((response: any) => response));
    
  }

}
