'use strict'

getUsuarios()
  .then(data => data.json())
  .then(users => {
    listarUsuarios(users.data)

    return getJanet()
  })
  .then(data => data.json())
  .then(janet => {
    mostrarInfoUsuario(janet.data)

    return getMyInfo()
  })
  .then(data => {
    console.log(data)

    mostrarInfoUsuario(JSON.parse(data))
  })
  .catch(error => {
    console.log(error)
  })

function getUsuarios() {
  return fetch('https://reqres.in/api/users')
}

function getJanet() {
  return fetch('https://reqres.in/api/users/2')
}

// Promesa propia
function getMyInfo() {
  var yo = {
    first_name: 'Andres',
    last_name: 'Guastavino',
    email: 'andresguasta@hotmail.com'
  }

  return new Promise((resolve, reject) => {
    var string_yo = JSON.stringify(yo)

    if(typeof string_yo != 'string') return reject('error')

    return resolve(string_yo)
  })
}

function listarUsuarios(usuarios) {
  var lista = document.createElement('ul')
  document.querySelector('body').append(lista)

  usuarios.map((user, index) => {
    var nombre = user.first_name + ' ' + user.last_name
    var email = user.email

    lista.innerHTML += `<li>${nombre}, ${email}</li>`
  })
}

function mostrarInfoUsuario(usuario) {
  var lista = document.createElement('ul')
  document.querySelector('body').append(lista)

  lista.innerHTML += `<li>Nombre: ${usuario.first_name}</li>`
  lista.innerHTML += `<li>Apellido: ${usuario.last_name}</li>`
  lista.innerHTML += `<li>Email: ${usuario.email}</li>`
  if(usuario.avatar)
    lista.innerHTML += `<li>Avatar: <img src="${usuario.avatar}" alt="Avatar del usuario"></li>`
}
