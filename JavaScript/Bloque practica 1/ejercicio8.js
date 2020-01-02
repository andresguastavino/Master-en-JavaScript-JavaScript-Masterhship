'use strict'

var num1 = parseInt(prompt('Bienvenido a la calculadora. Por favor ingrese un numero'))

while(isNaN(num1)) {
  num1 = parseInt(prompt('El numero que ingreso no es valido.\nPor favor ingrese un numero'))
}

var num2 = parseInt(prompt('Usted ingreso ' + num1 + '.\nIngrese otro numero'))

while(isNaN(num2)) {
  num2 = parseInt(prompt('El numero que ingreso no es valido.\nPor favor ingrese un numero'))
}

alert('Sus numeros son ' + num1 + ' y ' + num2)

var suma = num1 + num2
var resta = num1 - num2
var multiplicacion = num1 * num2
var division = num1 / num2

document.write('<h1>Resultados</h1>')
document.write(num1 + '+' + num2 + ' = ' + suma + '<br>')
document.write(num1 + '-' + num2 + ' = ' + resta + '<br>')
document.write(num1 + '*' + num2 + ' = ' + multiplicacion + '<br>')
document.write(num1 + '/' + num2 + ' = ' + division + '<br>')
