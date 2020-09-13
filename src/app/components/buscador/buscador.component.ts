import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router'
import { Heroeinterface } from "../../serviC/heroes.service";
import { HeroesService } from '../../servic/heroes.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroeinterface[]=[];
  termino:string;

  constructor(private activatedroute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.heroes =this.heroesService.buscarheroes(params['termino']);
    })
  }

  verheroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}
