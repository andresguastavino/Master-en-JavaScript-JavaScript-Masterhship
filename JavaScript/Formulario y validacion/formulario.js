'use strict'

window.onload = () => {
  var formulario = document.querySelector('form')
  var boxDatos = document.querySelector('div.box.datos')
  boxDatos.style.display = 'none'

  formulario.onsubmit = (event) => {
    event.preventDefault()

    var elementos = Array.from(formulario.elements)
    var error = false

    elementos.forEach((elemento) => {
      if(elemento.name == 'nombre') {
        var div = document.querySelector('div.nombre')
        var p = div.querySelector('p')

        if(elemento.value == "") {
          if(!p) {
            var p = document.createElement('p')
            p.style.color = 'red'
            p.style.fontWeight = 'bold'
            p.style.fontSize = '12px'
            p.innerHTML = 'No puede dejar este campo vacio'
            div.append(p)
          }
          error = true
        } else {
          if(p) {
            div.removeChild(p)
          }
        }
      }

      if(elemento.name == 'apellido') {
        var div = document.querySelector('div.apellido')
        var p = div.querySelector('p')

        if(elemento.value == "") {
          if(!p) {
            var p = document.createElement('p')
            p.style.color = 'red'
            p.style.fontWeight = 'bold'
            p.style.fontSize = '12px'
            p.innerHTML = 'No puede dejar este campo vacio'
            div.append(p)
          }
          error = true
        } else {
          if(p) {
            div.removeChild(p)
          }
        }
      }

      if(elemento.name == 'edad') {
        var div = document.querySelector('div.edad')
        var p = div.querySelector('p')

        if(elemento.value == "" || isNaN(elemento.value)) {
          if(!p) {
            p = document.createElement('p')
            p.style.color = 'red'
            p.style.fontWeight = 'bold'
            p.style.fontSize = '12px'
            div.append(p)
          }

          if(elemento.value == "") {
            p.innerHTML = 'No puede dejar este campo vacio'
          } else if(isNaN(elemento.value)) {
            p.innerHTML = 'La informacion provista en este campo no es valida'
          }
          error = true
        } else {
          if(p) {
            div.removeChild(p)
          }
        }
      }
    })

    if(!error) {
      var arrayErrores = Array.from(document.querySelectorAll('p'))

      arrayErrores.forEach((error) => {
        console.log(error)
        error.parentNode.removeChild(error)
      })

      boxDatos.style.display = 'block'
      boxDatos.innerHTML += `<p>Tu nombre es: <strong>${elementos[0].value}</strong></p><hr>`
      boxDatos.innerHTML += `<p>Tu apellido es: <strong>${elementos[1].value}</strong></p><hr>`
      boxDatos.innerHTML += `<p>Tu edad es: <strong>${elementos[2].value}</strong></p>`
    }
  }
}
