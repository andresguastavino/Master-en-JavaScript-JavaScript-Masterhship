// String
var cadena = "Un String";
console.log(cadena);
// cadena = 5 | Compilation error porque 5 no es string
// Numero
var numero = 5;
console.log(numero);
// numero = false | Compilation error porque false no es numero
// Boolean
var booleano = true;
// booleano = 'false' | Compilation error porque 'false' no es booleano
// Any
var cualquiera = 77;
console.log("Cualquiera 1: " + cualquiera);
cualquiera = "Soy cualquiera";
console.log("Cualquiera 2: " + cualquiera);
cualquiera = true;
console.log("Cualquiera 3: " + cualquiera);
// Arrays
var lenguajes = ['PHP', 'JS', 'Kotlin'];
console.log(lenguajes);
var years = [5, 12, 43];
console.log(years);
// Multiples tipos de datos
var multiple = "Hola mi nombre es pepe";
console.log("Multiple como string: " + multiple);
multiple = 25;
console.log("Multiple como numero: " + multiple);
var boolornumb = false;
console.log("Boolornumb como booleano: " + boolornumb);
boolornumb = 25;
console.log("Boolornumb como numero: " + boolornumb);
// Let (variable de bloque) vs Var (variable global)
var num1 = 10;
var num2 = 20;
if (num1 == 10) {
    var num1_1 = 50;
    var num2 = 100;
    console.log(num1_1, num2);
}
console.log(num1, num2);
