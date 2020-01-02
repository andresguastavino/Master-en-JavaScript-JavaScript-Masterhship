'use strict'

var input = 1
var cantNum = 0
var total = 0
var promedio = 0

alert("A continuacion le pediremos que ingrese muchos numeros y los sumaremos. Ingrese tantos numeros como quiera y para dejar de ingresar numeros debe ingresar un numero negativo")

while(input > 0) {
  input = parseInt(prompt("Ingrese un numero"))

  if(input > 0 && !isNaN(input)) {
    total += input
    cantNum++
  }
}

promedio = total / cantNum

alert("Usted ingreso " + cantNum + ". El total es " + total + ". El promedio es " + promedio )
