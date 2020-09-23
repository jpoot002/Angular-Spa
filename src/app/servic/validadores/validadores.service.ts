import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


interface ErrorValidate {
  [s:string]: boolean
}


@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  Nopalabras( control:FormControl ): ErrorValidate {

    if ( control.value?.toLowerCase() === 'puto' ){
      return {
        noHerrera: true
      }
    }

    return null;
  }

  Passwordsiguales( Contraseña1: string, Contraseñ2: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[Contraseña1];
      const pass2Control = formGroup.controls[Contraseñ2];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }

    }

  }

  Existeusuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if( !control.value ) {
      return Promise.resolve(null);
    }

    return new Promise( (resolve, reject) => {

      setTimeout(() => {

        if ( control.value === 'jesus' ) {
          resolve({ existe: true });
        } else {
          resolve( null );
        }

      }, 1000);


    });

  }

}
