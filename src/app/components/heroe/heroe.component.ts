import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Heroeinterface} from "../../serviC/heroes.service";
import { HeroesService} from '../../servic/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any={};

  constructor(private heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,
              private router:Router)
              {
                this.activatedRoute.params.subscribe(params=>
                  {
                  this.heroe =this.heroesService.getHeroe( params ['id']);
                  })
               }

  ngOnInit(): void {
  }


}


