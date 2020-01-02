'use strict'

function mostrarArray(array, texto = '') {
  document.write('<h3>Contenido del array ' + texto + ':</h3>')
  array.forEach((elemento, indice) => {
    document.write(`<span>${elemento}&nbsp|&nbsp</span>`)
  })
  document.write('<br><strong>-------------------------------------------</strong><br>')
}

alert('A continuacion le pediremos que ingrese 6 numeros')
var numeros = []

for(var i = 0; i < 6; i++) {
  var numero = parseInt(prompt('Ingrese un numero'))

  while(isNaN(numero)) {
    numero = parseInt(prompt('Numero invalido.\n Por favor vuelva a ingresar un numero'))
  }

  numeros.push(numero)
}

mostrarArray(numeros)

document.write('<h4>Ordenando array...................</h4>')
// Esto es necesario porque sino no los ordena correctamente
numeros.sort(function(x,y) { return x - y})
mostrarArray(numeros, 'ordenado')

document.write('<h4>Invirtiendo array...................</h4>')
numeros.reverse()
mostrarArray(numeros, 'invertido')

var buscado = parseInt(prompt('Ingrese un numero para buscar en el arreglo'))
document.write('<h4>Buscando en array el numero ' + buscado + '...................</h4>')
if(numeros.includes(buscado))
  document.write(`<h3>El arreglo incluye el numero ${buscado}</h3>`)
else
  document.write(`<h3>El arreglo no incluye el numero ${buscado}</h3>`)
