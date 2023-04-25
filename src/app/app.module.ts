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


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatSnackBarModule,
    
     
    JogosModule,
    UsuariosModule,
    ResultadoModule,
    CoreModule
   ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
