import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

  // dato | calculadora: otroDato
  // param1              param2
  transform(val1: number, val2: number) {
    return  `
      Suma: ${val1} + ${val2} = ${val1 + val2}.
      Resta: ${val1} - ${val2} = ${val1 - val2}.
      Multiplicacion: ${val1} * ${val2} = ${val1 * val2}.
      Division: ${val1} / ${val2} = ${val1 / val2}.
    `;
  }
}
