import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';




import { JogosModule } from './jogos/jogos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ResultadoModule } from './resultado/resultado.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ResultadosService } from './resultado/resultados.service';
import { UsuarioService } from './usuarios/usuario.service';
import { RouterModule, Routes } from '@angular/router';
import { MeusJogosComponent } from './jogos/meus-jogos/meus-jogos.component';
import { CadastroJogosComponent } from './jogos/cadastro-jogos/cadastro-jogos.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';
import { ResultadosComponent } from './resultado/resultados/resultados.component';
import { ConferenciaJogosComponent } from './jogos/conferencia-jogos/conferencia-jogos.component';
import { ConustaResultadoComponent } from './resultado/conusta-resultado/conusta-resultado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { SegurancaModule } from './seguranca/seguranca.module';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environment/environment';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: environment.tokenWhitelistedDomains,
        disallowedRoutes: environment.tokenBlacklistedRoutes
      }
    }),
    

    BrowserAnimationsModule,
    MatSnackBarModule,
    
     
    JogosModule,
    UsuariosModule,
    ResultadoModule,
    UsuariosModule,
    SegurancaModule,
    CoreModule,
    AppRoutingModule
   ],
  providers: [
    ResultadosService,
    UsuarioService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
