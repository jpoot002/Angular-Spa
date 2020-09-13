import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  tamano:number = 20;
  alerta:string="alert-primary"
  loading:boolean = false
  alertainformacion:string="info"

  public propiedades:any  = {
    danger:true,
  }

  TamTexMax(){
    if(this.tamano > 60){
      this.tamano = 60
    }else{
      this.tamano = this.tamano + 5
    }
  }
  TamTexMen(){
    if(this.tamano < 1){
      this.tamano = 1
    }else{
      this.tamano = this.tamano - 5
    }
  }

  EjecutarProceso(){
    this.loading=true;
    setTimeout(()=>this.loading=false, 1000)
  }

}
