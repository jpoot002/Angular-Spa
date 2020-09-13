import {Heroeinterface} from "../../servic/heroes.service"
import { Component, OnInit } from '@angular/core';
import { HeroesService} from '../../servic/heroes.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes:Heroeinterface[]=[];

  constructor(private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();

  }
  verheroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
