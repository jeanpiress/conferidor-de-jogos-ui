import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';



@NgModule({
  declarations: [CadastroUsuarioComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    InputTextModule
  ],
  exports:[CadastroUsuarioComponent]
})
export class UsuariosModule { }
