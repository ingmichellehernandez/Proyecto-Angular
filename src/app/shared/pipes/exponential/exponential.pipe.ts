import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // este es otro tipo de decorador, diferente a component.
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // Recibiremos un valor de tipo "number" y no tendra atributos.
  // el valor de entrada sera elevado a la "2". La función Math.pow() devuelve la base elevada al exponente
    transform(value: number): any {
      return Math.pow(value, 2);
  }

}
