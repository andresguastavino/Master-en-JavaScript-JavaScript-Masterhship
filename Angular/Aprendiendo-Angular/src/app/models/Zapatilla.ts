export class Zapatilla {

  constructor(
    private nombre: string,
    private marca: string,
    private color: string,
    private talle: string,
    private precio: number,
    private enOferta: boolean) {
      this.nombre = nombre;
      this.marca = marca;
      this.color = color;
      this.talle = talle;
      this.precio = precio;
      this.enOferta = enOferta;
  }
}
