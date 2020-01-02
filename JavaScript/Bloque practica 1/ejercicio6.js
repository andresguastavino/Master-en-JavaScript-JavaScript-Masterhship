'use strict'

var num = parseInt(prompt('Ingrese un numero y te dire si es par o impar'))

while(isNaN(num)) {
  alert('El numero que ingreso no es valido')
  num = parseInt(prompt('Ingrese un numero y te dire si es par o impar'))
}

if(num %2 == 0)
  alert('El numero ' + num + ' es par')
else
  alert('El numero ' + num + ' es impar')
