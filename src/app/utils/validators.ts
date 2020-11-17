import { AbstractControl } from '@angular/forms';

export class MyValidators {

// los métodos serán estáticos, nos copiamos como lo hace angular.
// con esto harimos una validacion del precio.
// "control" es quien tendra el valor.
static isPriceValid (control: AbstractControl) {
    const value = control.value;
    // console.log(value);
// luego de tener el valor hacemos la validación.
// si el valor es mayor a diez mil, retornara un error (json u objeto con el error) llamado "price_invalid".
    if (value > 10000) {
        return {price_invalid: true};
    }
// si todo esta bien y no hay error, se retorna un nulo.
        return null;
    }
}