import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../../servic/pais/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private PaisServices:PaisService) { }

  ngOnInit(): void {
    this.PaisServices.getPaises()
    .subscribe( paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[ Seleccione Pais]',
        codigo: ''
      })

      console.log( this.paises );
    });
  }

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: 'M'
  }

  paises: any[] = [];


  FormsGuardar(formReactivo:NgForm){
    console.log(formReactivo.form.controls)

    if ( formReactivo.invalid ) {

      Object.values( formReactivo.controls ).forEach( control => {
        control.markAsTouched();
      });

      return;
    }


    console.log( formReactivo.value );

  }

}
