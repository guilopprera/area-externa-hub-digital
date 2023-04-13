import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuemSomosComponent,
    PlanosComponent
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
    AvatarGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
