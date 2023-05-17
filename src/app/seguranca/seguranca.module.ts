import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environment/environment';
import { AuthInterceptor } from 'src/auth.interceptor';


export function tokenGetter() {

  return localStorage.getItem('token')
}


@NgModule({
  declarations: [
    LoginFormComponent
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
    HttpClientModule,
    JwtModule.forRoot({
      config: {
      tokenGetter: tokenGetter,
      allowedDomains: ['localhost:8080'],
      disallowedRoutes: ['/\/oauth\/token/'],

    }
    })
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // Use o interceptor aqui
      multi: true
    }     
  ]

})
export class SegurancaModule { }
