import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Jogo } from './cadastro-jogos/cadastro-jogos.component';



@Injectable({
  providedIn: 'root'
})
export class JogosService {

  jogoConcursoUrl = 'http://localhost:8080/jogos/concurso';
  jogoUrl = 'http://localhost:8080/jogos';
  finaisURL = 'http://localhost:8080/finais';
  

   constructor(private http: HttpClient) { }
       
  pesquisar(filtro: any): Observable<any>{
    const params = new HttpParams();
    const headers = new HttpHeaders().set('Authorization', 'Basic amVhbkBnbWFpbDpzZW5oYTEyMw==');
    
    
      params.set('concurso', filtro.concurso);
    
    
    return this.http.get(`${this.jogoConcursoUrl}/${filtro.concurso}`, { headers, params })
    .pipe(map((response: any) => response));
   

  }

  adicionar(jogo: Jogo) : Observable<Jogo>{
    let headers = new HttpHeaders().set('Authorization', 'Basic amVhbkBnbWFpbDpzZW5oYTEyMw==');
    headers = headers.set('content-Type', 'application/json');
   
    return this.http.post(this.jogoUrl, JSON.stringify(jogo), {headers})
    .pipe(map((response: any) => response));
    
  }

excluir(codigo: number) : Observable<void>{
   const headers = new HttpHeaders().set('Authorization', 'Basic amVhbkBnbWFpbDpzZW5oYTEyMw==');
  

  return this.http.delete(`${this.jogoUrl}/${codigo}`, { headers })
  .pipe(map(() => {}));
}     
   
pesquisarBatidos(filtro: any): Observable<any>{
  const params = new HttpParams();
  const headers = new HttpHeaders().set('Authorization', 'Basic amVhbkBnbWFpbDpzZW5oYTEyMw==');
  
  
    params.set('concurso', filtro.concurso).set('usuario', filtro.usuario);
    
  
  
  return this.http.get(`${this.finaisURL}/concurso/${filtro.concurso}/usuario/${filtro.usuario}`, { headers, params })
  .pipe(map((response: any) => response));
 

}


}
