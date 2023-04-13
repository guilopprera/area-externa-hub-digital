import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { PlanosComponent } from './pages/planos/planos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'planos', component: PlanosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
