import { Component } from '@angular/core';
import { Zapatilla } from '../models/Zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent {
  public title: string;
  public zapatillas: Array<Zapatilla>;

  // Variables para agregar una zapatilla nueva
  public nombre: string;
  public marca: string;
  public color: string;
  public talle: string;
  public precio: number;
  public enOferta: boolean;


  constructor() {
    this.title = 'Componente de Zapatillas';
    this.zapatillas = [
      new Zapatilla('Pipes', 'Nike', 'Negro', '39', 3000, false),
      new Zapatilla('Mises', 'Adidas', 'Blanco y Azul', '42', 2600, false),
      new Zapatilla('Jordans', 'Paladini', 'Dorado', '40', 3200, true),
      new Zapatilla('Simea', 'Reebook', 'Gris', '38', 3000, true)
    ];
  }

  agregarZaptilla() {
    this.zapatillas.push(
      new Zapatilla(this.nombre, this.marca, this.color, this.talle, this.precio, (this.enOferta)?true:false)
    );

    this.limpiarInputs();
  }

  limpiarInputs() {
    (document.querySelectorAll('div#agregar input')).forEach((input) => {
      if(input.type == 'checkbox') {
        input.checked = false;
      } else {
        input.value = '';
      }
    })
  }

  borrar(index: number) {
    this.zapatillas.splice(index, 1);
  }
}
