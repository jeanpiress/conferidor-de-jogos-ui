import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Usuario } from './cadastro-usuario/cadastro-usuario.component';


import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router) { 
      this.usuarioUrl = `${environment.apiUrl}/usuarios`;
    }


  adicionarUsuario(usuario: Usuario) : Observable<Usuario>{
   
   
    return this.http.post(this.usuarioUrl, usuario)
    .pipe(map((response: any) => response),
    catchError(error => {
      if (error.status === 400) {
        return throwError('Email já cadastrado');
      } else {
        return throwError('Erro no servidor, tente novamente mais tarde!');
      }

      
      return throwError(error);
    }));
    
  }

}
