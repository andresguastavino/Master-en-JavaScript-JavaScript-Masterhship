import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/Zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Pipes', 'Nike', 'Negro', '39', 3200, false),
      new Zapatilla('Mises', 'Adidas', 'Blanco y Azul', '42', 2600, false),
      new Zapatilla('Jordans', 'Paladini', 'Dorado', '40', 3200, true),
      new Zapatilla('Simea', 'Reebook', 'Gris', '38', 3000, true)
    ];
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
