import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/Zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [
    ZapatillaService
  ]
})
export class ZapatillasComponent implements OnInit {
  public title: string;
  public zapatillas: Array<Zapatilla>;

  // Variables para agregar una zapatilla nueva
  public nombre: string;
  public marca: string;
  public color: string;
  public talle: string;
  public precio: number;
  public enOferta: boolean;


  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.title = 'Componente de Zapatillas';
  }

  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatillas();
  }

  agregarZaptilla() {
    this.zapatillas.push(
      new Zapatilla(this.nombre, this.marca, this.color, this.talle, this.precio, (this.enOferta)?true:false)
    );

    this.limpiarInputs();
  }

  limpiarInputs() {
    (document.querySelectorAll('div#agregar input')).forEach((input) => {
      var inputHTML = <HTMLInputElement>input
      if(inputHTML.type == 'checkbox') {
        inputHTML.checked = false;
      } else {
        inputHTML.value = '';
      }
    })
  }

  borrar(index: number) {
    this.zapatillas.splice(index, 1);
  }
}
