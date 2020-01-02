'use strict'

// Comprobar disponibilidad de LocalStorage
if(typeof(Storage) !== 'undefined') {
  console.log('LocalStorage disponible')
} else {
  console.log('Incompatible on LocalStorage')
}

// Guardar datos
localStorage.setItem('practica', 'LocalStorage')

// Recuperar datos
var dato = localStorage.getItem('practica')
console.log(`El dato recuperado de la key practica es ${dato}`)

// Guardar objetos
var usuario = {
  nombre: 'Andres',
  apellido: 'Guastavino',
  email: 'andresguasta@hotmail.com'
}

localStorage.setItem('usuario', JSON.stringify(usuario))

// Recuperar objeto
var usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'))
console.log(usuarioRecuperado)

setTimeout(() => {
  // Borrar un dato
  localStorage.removeItem('practica')

  localStorage.setItem('1', 'item1')
  localStorage.setItem('2', 'item2')
  localStorage.setItem('3', 'item3')
  localStorage.setItem('4', 'item4')
  localStorage.setItem('5', 'item5')
}, 5000);

setTimeout(() => {
  // Limpiar el LocalStorage
  localStorage.clear()
}, 10000);
