import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Usuario } from './cadastro-usuario/cadastro-usuario.component';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }


  adicionarUsuario(usuario: Usuario) : Observable<Usuario>{
    let headers = new HttpHeaders().set('Authorization', 'Basic amVhbkBnbWFpbDpzZW5oYTEyMw==');
    headers = headers.set('content-Type', 'application/json');
   
    return this.http.post(this.usuarioUrl, JSON.stringify(usuario), {headers})
    .pipe(map((response: any) => response));
    
  }

}
