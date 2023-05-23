import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { EventoDetalhesComponent } from './pages/evento-detalhes/evento-detalhes.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { ListaEventosComponent } from './pages/lista-eventos/lista-eventos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { NovaContaComponent } from './pages/nova-conta/nova-conta.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuemSomosComponent,
    EventoDetalhesComponent,
    ListaEventosComponent,
    NovaContaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    MenubarModule,
    ScrollPanelModule,
    FontAwesomeModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    BreadcrumbModule,
    DropdownModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
