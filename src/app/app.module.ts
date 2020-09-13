import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Component
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { HeroeComponent } from './components/heroe/heroe.component'
import { BuscadorComponent } from './components/buscador/buscador.component';
//rutas
import { AppRoutingModule } from './app.routes';
// servicios
import {HeroesService} from './servic/heroes.service';
import { HeroetarjetaComponent } from './components/heroetarjeta/heroetarjeta.component';


import { LOCALE_ID} from '@angular/core';
import '@angular/common/locales/global/es';
import { ResaldatoDirective } from './components/home/resaldato.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroetarjetaComponent,
    ResaldatoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
