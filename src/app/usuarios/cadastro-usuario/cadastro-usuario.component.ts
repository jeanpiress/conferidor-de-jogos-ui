import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente{
  nome: string = "";
  email: string = "";
  senha: string = "";

  }

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
    
  cliente = new Cliente();

  salvar(form: NgForm) {
       
    console.log(form)
   
    form.reset();

  }
}
