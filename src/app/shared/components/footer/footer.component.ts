import { VariableBinding } from '@angular/compiler';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
// luego importamos FormControl para usar el formulario reactivo y las validaciones de angular por defecto.
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // creamos un campo "email" de tipo FormControl.
  emailField: FormControl;

  constructor() { 
    // aqui decimos que "emailField" es una instancia de FormControl.
    // Luego que el campo '' estará ven blanco y que tiene condiciones, no puede estar en vacio, los caracteres min 4 y max 10.
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]);

    // Para controlar los datos o saber que pasa desde el controlador, debemos escuchar los cambios de ese campo.
    // this.emailField.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnInit(): void {
  }

// sendMail (enviar correo) sera la funcion, si lo que esta en el campo es valido, mostrara solo el valor.
  sendMail(): void {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

  getErrorMessage(): any {
    if (this.emailField.hasError('required')) {
      return 'Introduce un correo valido';
    }

    return this.emailField.hasError('email') ? 'No es un email valido' : '';
  }
}
