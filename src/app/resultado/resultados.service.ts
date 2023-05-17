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
    
    
    params.set('concurso', filtro.concurso);
    
    
    return this.http.get(`${this.resultadosUrl}/concurso/${filtro.concurso}`, { params })
    .pipe(map((response: any) => response));
   

  }

  adicionarResultado(resultado: ResultadoCadastro) : Observable<ResultadoCadastro>{
  
    return this.http.post(this.resultadosUrl, resultado)
    .pipe(map((response: any) => response));
    
  }

}
