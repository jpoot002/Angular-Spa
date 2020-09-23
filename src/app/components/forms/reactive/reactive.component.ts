import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray , Validators  } from '@angular/forms';
import { ValidadoresService } from '../../../servic/validadores/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  Forma:FormGroup;

  constructor(private Formbuilder: FormBuilder,
              private Validadoreservice: ValidadoresService ) {
    this.Crearfromulario();
    this.Cargardatosform();
    this.EstatusForms();
  }

  ngOnInit(): void {

  }

  Crearfromulario(){
    this.Forma=this.Formbuilder.group({
      Usuario:['',[ Validators.required, Validators.minLength(2),this.Validadoreservice.Nopalabras],this.Validadoreservice.Existeusuario],
      Nombre:['',[ Validators.required, Validators.minLength(2),this.Validadoreservice.Nopalabras]],
      Apellido:['',[Validators.required, Validators.minLength(2), this.Validadoreservice.Nopalabras]],
      Correo:['',[ Validators.required, Validators.minLength(2),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Contrasena1: ['',[Validators.required, Validators.minLength(2)]],
      Contrasena2: ['',[Validators.required, Validators.minLength(2)]],
      Direccion: this.Formbuilder.group({
        Distrito:['', [Validators.required, Validators.minLength(2)]],
        Ciudad:['', [Validators.required,Validators.minLength(2)]],
      }),
      pasatiempos: this.Formbuilder.array([])
    },{
      validators: this.Validadoreservice.Passwordsiguales('Contrasena1','Contrasena2')
    });
  }

  EstatusForms() {
     this.Forma.valueChanges.subscribe( valor => {
      console.log(valor);
     });

     this.Forma.statusChanges.subscribe( status => console.log({ status }));

  }

  get Contrasenanovalido() {
    return this.Forma.get('Contrasena1').invalid && this.Forma.get('Contrasena2').touched;
  }
  get Contrasenadosnovalido() {
    const Contrasena1 = this.Forma.get('Contrasena1').value;
    const Contrasena2 = this.Forma.get('Contrasena2').value;

    return ( Contrasena1 === Contrasena2 ) ? false : true;
  }

  get Usuarioinvalido() {
    return this.Forma.get('Usuario').invalid && this.Forma.get('Usuario').touched
  }

  get pasatiempos() {
    return this.Forma.get('pasatiempos') as FormArray;
  }

  get Nombreinvalido() {
    return this.Forma.get('Nombre').invalid && this.Forma.get('Nombre').touched
  }

  get Apellidoinvalido() {
    return this.Forma.get('Apellido').invalid && this.Forma.get('Apellido').touched
  }

  get Correoinvalido() {
    return this.Forma.get('Correo').invalid && this.Forma.get('Correo').touched
  }
  get Distritoinvalido() {
    return this.Forma.get('Direccion.Distrito').invalid && this.Forma.get('Direccion.Distrito').touched
  }

  get Ciudadinvalido() {
    return this.Forma.get('Direccion.Ciudad').invalid && this.Forma.get('Direccion.Ciudad').touched
  }

  Guardarform(){
    console.log(this.Forma);

    if ( this.Forma.invalid ) {

      return Object.values( this.Forma.controls ).forEach( control => {

        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }
  }

  Cargardatosform(){
    this.Forma.reset({
      Usuario:'Jpoot',
      Nombre: 'Jesus Alfredo',
      Apellido: 'Poot Canche',
      Correo: 'jpoot002@gmail.com',
      Contrasena1: '123',
      Contrasena2: '123',
      Direccion: {
        Distrito: 'Yucatan',
        Ciudad: 'Merida'
      },

    });

  }

  Agregarpasatiempo() {
    this.pasatiempos.push(this.Formbuilder.control('',Validators.required));
  }

  Borrarpasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }
}
