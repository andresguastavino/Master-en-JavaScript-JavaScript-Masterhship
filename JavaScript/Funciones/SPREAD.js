function listadoFrutas(fruta1, fruta2, ...otras_frutas) {
  console.log('Fruta1 ', fruta1)
  console.log('Fruta2 ', fruta2)
  console.log('Otras frutas ', otras_frutas)
}

var frutas = ['Naranja', 'Manzana']
listadoFrutas(...frutas, 'Sandia', 'Banana', 'Kiwi', 'Melon')
