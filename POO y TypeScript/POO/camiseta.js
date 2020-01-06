var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo de ' + logo);
        };
    };
}
// Aplico el decorador
var Camiseta = /** @class */ (function () {
    function Camiseta(color, marca, talle, modelo, precio) {
        this.color = color;
        this.marca = marca;
        this.talle = talle;
        this.modelo = modelo;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
    ], Camiseta);
    return Camiseta;
}());
// Herencia
var CamisetaMangaCorta = /** @class */ (function (_super) {
    __extends(CamisetaMangaCorta, _super);
    function CamisetaMangaCorta(color, marca, talle, modelo, precio) {
        return _super.call(this, color, marca, talle, 'Camiseta de mangas cortas', precio) || this;
    }
    return CamisetaMangaCorta;
}(Camiseta));
var camiseta = new Camiseta('Blanco', 'Legacy', 'L', 'Cuello en V', 2000);
console.log(camiseta);
camiseta.estampacion();
var camisetaMangaCorta = new CamisetaMangaCorta('Azul', 'Nike', 'M', 'Un modelo que no es', 1400);
console.log(camisetaMangaCorta);
