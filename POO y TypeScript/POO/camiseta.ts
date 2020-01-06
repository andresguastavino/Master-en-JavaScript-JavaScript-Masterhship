// Interfaz
interface CamisetaBase {
  setColor(color: string)
  getColor(): string
}

// Decorador
function estampar(logo: string) {
  return function(target: Function) {
    target.prototype.estampacion = function(): void {
      console.log('Camiseta estampada con el logo de ' + logo)
    }
  }
}

// Aplico el decorador
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase {
  private color: string
  private marca: string
  private talle: string
  private modelo: string
  private precio: number

  constructor(color: string, marca: string, talle: string, modelo: string, precio: number) {
    this.color = color
    this.marca = marca
    this.talle = talle
    this.modelo = modelo
    this.precio = precio
  }

  public setColor(color: string) {
    this.color = color
  }

  public getColor(): string {
    return this.color
  }
}

// Herencia
class CamisetaMangaCorta extends Camiseta {

  constructor(color: string, marca: string, talle: string, modelo: string, precio: number) {
    super(color, marca, talle, 'Camiseta de mangas cortas', precio)
  }
}

var camiseta = new Camiseta('Blanco', 'Legacy', 'L', 'Cuello en V', 2000)
console.log(camiseta)

camiseta.estampacion()

var camisetaMangaCorta = new CamisetaMangaCorta('Azul', 'Nike', 'M', 'Un modelo que no es', 1400)
console.log(camisetaMangaCorta)
