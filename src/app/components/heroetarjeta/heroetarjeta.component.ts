import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styleUrls: ['./heroetarjeta.component.css']
})
export class HeroetarjetaComponent implements OnInit {

  @Input() heroetarjeta:any={};
  @Input() indexheroetarjeta:number;
  @Output() heroeselecionado:EventEmitter<number>;

  constructor(private router:Router,) {
    this.heroeselecionado= new EventEmitter();
   }

  ngOnInit(): void {
  }

  verheroe(){

    this.heroeselecionado.emit(this.indexheroetarjeta)
  }
}
