import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { EventoDetalhesComponent } from './pages/evento-detalhes/evento-detalhes.component';
import { ListaEventosComponent } from './pages/lista-eventos/lista-eventos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NovaContaComponent } from './pages/nova-conta/nova-conta.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: QuemSomosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'lista-eventos', component: ListaEventosComponent },
  { path: 'evento-detalhes', component: EventoDetalhesComponent },
  { path: 'nova-conta', component: NovaContaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
