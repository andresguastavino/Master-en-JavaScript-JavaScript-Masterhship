'use strict'

// BOM - Browser Object Model

console.log('Alto de la ventana ', window.innerHeight)
console.log('Ancho de la ventana ', window.innerWidth)
console.log('Url actual ', window.location)
console.log('Href actual ', window.location.href)

function redirect(url) {
  window.location.href = url
}

function abrirVentana(url) {
  window.open(url)
}
