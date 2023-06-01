import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';



import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Jogo } from './cadastro-jogos/cadastro-jogos.component';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class JogosService {

  
  jogoUrl = 'http://localhost:8080/jogos';
  finaisURL = 'http://localhost:8080/finais';
  

   constructor(
    private http: HttpClient,
    private router: Router) { }
       
  pesquisar(filtro: any): Observable<any>{
    const params = new HttpParams();
     
    
    params.set('concurso', filtro.concurso).set('usuario', filtro.usuario);
    
    
    return this.http.get(`${this.jogoUrl}/concurso/${filtro.concurso}/usuario/${filtro.usuario}`, { params })
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

  adicionar(jogo: Jogo) : Observable<Jogo>{
    return this.http.post(this.jogoUrl, jogo)
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

excluir(codigo: number) : Observable<void>{
   

  return this.http.delete(`${this.jogoUrl}/${codigo}`)
  .pipe(map(() => {}),
  catchError(error => {
    if (error.status === 401) {
      this.router.navigate(['/login']);
    } else {
      return throwError('Erro no servidor, tente novamente mais tarde!');
    }

    
    return throwError(error);
  }));
}     
   
pesquisarBatidos(filtro: any): Observable<any>{
  const params = new HttpParams();
  
  
    params.set('concurso', filtro.concurso).set('usuario', filtro.usuario);
    
  
  
  return this.http.get(`${this.finaisURL}/concurso/${filtro.concurso}/usuario/${filtro.usuario}`, { params })
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

pesquisarPorId(id: number): Observable<any>{
    
  
  return this.http.get(`${this.jogoUrl}/id/${id}`)
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

atualizar(jogo: Jogo) : Observable<Jogo>{
  
 
  return this.http.put(`${this.jogoUrl}/id/${jogo.usuario.id}`, jogo)
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

espelhar(filtro: any) : Observable<Jogo>{
  const params = new HttpParams();
  params.set('concursoBase', filtro.concursoBase)
  .set('concursoEspelho', filtro.concursoEspelho)
  .set('usuario', filtro.usuario);
  
  return this.http.post(`${this.jogoUrl}/base/${filtro.concursoBase}/espelho/${filtro.concursoEspelho}/usuario/${filtro.usuario}`, { params })
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
