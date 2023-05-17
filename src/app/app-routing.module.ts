import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusJogosComponent } from './jogos/meus-jogos/meus-jogos.component';
import { CadastroJogosComponent } from './jogos/cadastro-jogos/cadastro-jogos.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';
import { ConustaResultadoComponent } from './resultado/conusta-resultado/conusta-resultado.component';
import { ResultadosComponent } from './resultado/resultados/resultados.component';
import { ConferenciaJogosComponent } from './jogos/conferencia-jogos/conferencia-jogos.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { MenuComponent } from './core/menu/menu.component';

const routes: Routes = [
{path: 'jogos', component: MeusJogosComponent},
{path: 'jogos/:id', component: MeusJogosComponent},
{path: 'jogo/:id', component: CadastroJogosComponent},
{path: 'jogo/novo', component: CadastroJogosComponent},
{path: 'usuario/novo', component: CadastroUsuarioComponent},
{path: 'resultados', component: ConustaResultadoComponent},
{path: 'resultado/novo', component: ResultadosComponent},
{path: 'conferir', component: ConferenciaJogosComponent},
{path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
{path: 'login', component: LoginFormComponent},
{path: 'menu', component: MenuComponent},
{path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

