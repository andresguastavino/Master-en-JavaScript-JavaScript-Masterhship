'use strict'

function sumar(num1, num2, sumaYMuestra, sumaPorDos) {
  var suma = num1 + num2

  sumaYMuestra(suma) // Esta es una funcion de callback
  sumaPorDos(suma) // Esta tambien es una funcion de callback
}

sumar(5,8,
  function(suma) { // Esto es una funcion anonima
    console.log('La suma es ' + suma)
  },
  (suma) => { // Esto tambien es una funcion anonima
    console.log('La suma por dos es ' + (suma * 2))
  })
