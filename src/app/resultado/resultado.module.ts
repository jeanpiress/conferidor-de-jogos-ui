import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConustaResultadoComponent } from './conusta-resultado/conusta-resultado.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { AppRoutingModule } from '../app-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    ConustaResultadoComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
  ],
  exports:[
    ConustaResultadoComponent,
    ResultadosComponent
  ]
})
export class ResultadoModule { }
