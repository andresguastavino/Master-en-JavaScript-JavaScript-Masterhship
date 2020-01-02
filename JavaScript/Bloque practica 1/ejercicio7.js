'use strict'

var num = parseInt(prompt('Ingrese un numero para ver su tabla de multiplicacion'))

while(isNaN(num)) {
  alert('El numero que ingreso no es valido')
  num = parseInt(prompt('Ingrese un numero para ver su tabla de multiplicacion'))
}

document.write('<h1>La tabla de multiplicar de ' + num + ':</h1>')

for(var i = 1; i <= 10; i++) {
  document.write(num + 'x' + i + ' = ' + num * i + '<br>')
}
