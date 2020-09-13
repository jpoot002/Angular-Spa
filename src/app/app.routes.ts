import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//components
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component'
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  {path: 'buscar/:termino', pathMatch: 'full',component: BuscadorComponent},
  {path: 'about', pathMatch: 'full',component: AboutComponent},
  {path: 'heroes', pathMatch: 'full',component: HeroesComponent},
  {path: 'home', pathMatch: 'full',component: HomeComponent},
  {path: 'heroe/:id', pathMatch: 'full',component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
//export const App_RoutingModule = RouterModule.forRoot(routes);

export class AppRoutingModule {}
