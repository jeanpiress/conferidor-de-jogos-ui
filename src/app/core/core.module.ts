import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { JogosService } from './../jogos/jogos.service';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  declarations: [NavbarComponent],
  exports:[
    NavbarComponent,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  imports: [
    CommonModule,

    ConfirmDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers:[
    ErrorHandlerService,
    ConfirmationService,
    JogosService
  ]
})
export class CoreModule { }
