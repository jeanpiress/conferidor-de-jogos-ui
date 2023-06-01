import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { JogosService } from './../jogos/jogos.service';
import { ConfirmationService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from '../seguranca/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NaoAutoriazadoComponent } from './nao-autoriazado.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent, MenuComponent, NaoAutoriazadoComponent],
  exports:[
    NavbarComponent,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,

    ConfirmDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers:[
    ErrorHandlerService,
    ConfirmationService,
    Title,
    JogosService,
    AuthService,
    JwtHelperService
  ]
})
export class CoreModule { }
