import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { EventoDetalhesComponent } from './pages/evento-detalhes/evento-detalhes.component';
import { ListaEventosComponent } from './pages/lista-eventos/lista-eventos.component';
import { NovaContaComponent } from './pages/nova-conta/nova-conta.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'lista-eventos', component: ListaEventosComponent},
  { path: 'evento-detalhes', component: EventoDetalhesComponent},
  { path: 'nova-conta', component: NovaContaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
