import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroJogosComponent } from './cadastro-jogos/cadastro-jogos.component';
import { ConferenciaJogosComponent } from './conferencia-jogos/conferencia-jogos.component';
import { MeusJogosComponent } from './meus-jogos/meus-jogos.component';

import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { AuthService } from '../seguranca/auth.service';
import { SegurancaModule } from '../seguranca/seguranca.module';






@NgModule({
  declarations: [
    CadastroJogosComponent,
    ConferenciaJogosComponent,
    MeusJogosComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    InputTextModule,
    HttpClientModule,
    RouterModule,
    SegurancaModule

    
  ],
  exports: [
   
  ]

})
export class JogosModule { }
