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

  
  jogoUrl = 'http://localhost:8080/jogos';
  finaisURL = 'http://localhost:8080/finais';
  

   constructor(private http: HttpClient) { }
       
  pesquisar(filtro: any): Observable<any>{
    const params = new HttpParams();
     
    
    params.set('concurso', filtro.concurso).set('usuario', filtro.usuario);
    
    
    return this.http.get(`${this.jogoUrl}/concurso/${filtro.concurso}/usuario/${filtro.usuario}`, { params })
    .pipe(map((response: any) => response));
   

  }

  adicionar(jogo: Jogo) : Observable<Jogo>{
    return this.http.post(this.jogoUrl, jogo)
    .pipe(map((response: any) => response));
    
  }

excluir(codigo: number) : Observable<void>{
   

  return this.http.delete(`${this.jogoUrl}/${codigo}`)
  .pipe(map(() => {}));
}     
   
pesquisarBatidos(filtro: any): Observable<any>{
  const params = new HttpParams();
  
  
    params.set('concurso', filtro.concurso).set('usuario', filtro.usuario);
    
  
  
  return this.http.get(`${this.finaisURL}/concurso/${filtro.concurso}/usuario/${filtro.usuario}`, { params })
  .pipe(map((response: any) => response));
 

}

pesquisarPorId(id: number): Observable<any>{
    
  
  return this.http.get(`${this.jogoUrl}/id/${id}`)
  .pipe(map((response: any) => response));
 

}

atualizar(jogo: Jogo) : Observable<Jogo>{
  
 
  return this.http.put(`${this.jogoUrl}/id/${jogo.usuario.id}`, jogo)
  .pipe(map((response: any) => response));
  
}

}
