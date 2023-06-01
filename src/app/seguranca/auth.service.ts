import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

interface TokenResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  outhTokenUrl = 'http://localhost:8080/oauth/token';
  tokenRevokeUrl = 'http://localhost:8080/tokens/revoke'
  jwtPayload: any;

  
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) {
      this.carregarToken();
    }

login(usuario: string, senha: string): Observable<object>{
  let headers = new HttpHeaders().set('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
  headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

  const body = `username=${usuario}&password=${senha}&grant_type=password`;
 
  return this.http.post<TokenResponse>(this.outhTokenUrl, body, { headers, withCredentials: true })
  .pipe(
    tap(response => {
      this.armarazenarToken(response.access_token);
    }),
    catchError(error => {
      if (error.status === 400 || error.status === 401) {
        console.log('Login ou senha inválido');
        return throwError('Login ou senha inválido');
      } else {
        return throwError('Erro no servidor, tente novamente mais tarde!');
      }

      
      return throwError(error);
    })
    
  );

}

obterNovoAccessToken(): Observable<object>{

   let headers = new HttpHeaders().set('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
  headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

  const body = 'grant_type=refresh_token';

  return this.http.post<any>(this.outhTokenUrl, body, { headers, withCredentials: true })
  .pipe(
    tap((response: any) => {
    this.armarazenarToken(response['access_token']);
    console.log('Novo access token criado!');
  }),
  catchError(error =>{
    console.log('Erro ao renovar Token', error);
    return throwError(error);
  })
  
  )
  
}

limparAccessToken(){
  localStorage.removeItem('token');
  this.jwtPayload = null;
}

logout(){
   return this.http.delete(this.tokenRevokeUrl, {withCredentials: true})
   .pipe(
    tap(() => {
      this.limparAccessToken();
    })
   );
}


isAccessTokenInvalido() {
  const token = localStorage.getItem('token');
  return !token || this.jwtHelper.isTokenExpired(token);
}

private armarazenarToken(token: string){
  this.jwtPayload = this.jwtHelper.decodeToken(token);
  localStorage.setItem('token', token);
}

private carregarToken(){
  const token = localStorage.getItem('token');

  if(token){
    this.armarazenarToken(token);
  }
}

temPermissao(premissao: string){
  return this.jwtPayload && this.jwtPayload.authorities.includes(premissao);
}

temQualquerPermissao(roles: any){
for(const role of roles){
  if(this.temPermissao(roles)){
    return true;
  }
}
return false;
}

}