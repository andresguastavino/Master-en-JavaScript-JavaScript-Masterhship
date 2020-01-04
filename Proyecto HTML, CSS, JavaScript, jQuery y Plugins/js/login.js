// Login falso
var form = $('#login form')
var login = $('#login')

form.submit((event) => {
  event.preventDefault()

  var email = $('#login form input[name="email"]').val()
  var password = $('#login form input[name="pass"]').val()

  if(email.trim() != "" && password.trim() != "") {
    form.hide()
    login.find('h4 span').text('Bienvenido')
    login.append(`<p style="text-align: center;">Bienvenido <strong>${email}</strong></p>`)

    localStorage.setItem('email', email)
  } else {
    var divErrores = $('div.errores')
    divErrores.innerHTML = ""
    divErrores.append(`<p>!Datos de inicio de sesion incorrectos</p>`)
  }
})
