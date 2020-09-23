import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//components
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component'
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';

const routes: Routes = [
  {path: 'Reactive', component: ReactiveComponent},
  {path: 'Template', component: TemplateComponent},
  {path: 'buscar/:termino',component: BuscadorComponent},
  {path: 'about',component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
//export const App_RoutingModule = RouterModule.forRoot(routes);

export class AppRoutingModule {}
