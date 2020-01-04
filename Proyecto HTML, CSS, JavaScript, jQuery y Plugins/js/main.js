$(document).ready(() => {

  // Slider
  if(window.location.href.indexOf('index')  > -1) {
    $('#slider').bxSlider({
      captions: true,
      mode: 'fade',
      randomStart: true,
      infiniteLoop: true,
      responsive: true,
      pager: false
    });
  }

  // Posts
  if(window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        title: 'Un post',
        date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Otro post',
        date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Tercer post',
        date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'El mejor post',
        date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Ultimo post',
        date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]

    posts.forEach((post) => {
      var post = `
        <article class="articulo">
          <h2>${post.title}</h2>
          <p class="fecha">${post.date}</p>
          <p>${post.description}</p>
          <button class="mas">Leer más</button>
        </article>
      `

      $('section.articulos').append(post)
    })
  }

  // Theme selector
  $('#to-green').click(() => {
    var theme = $('#theme')

    if(theme.attr('href') != 'css/green.css') {
      theme.attr('href', 'css/green.css')
    }
  })

  $('#to-red').click(() => {
    var theme = $('#theme')

    if(theme.attr('href') != 'css/red.css') {
      theme.attr('href', 'css/red.css')
    }
  })

  $('#to-blue').click(() => {
    var theme = $('#theme')

    if(theme.attr('href') != 'css/blue.css') {
      theme.attr('href', 'css/blue.css')
    }
  })

  // Scroll para ir arriba
  $('#subir').click((event) => {
    event.preventDefault()

    $('html, body').animate({
      scrollTop: 0
    }, 500)
  })

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

  // Acordeon
  if(window.location.href.indexOf('about') > -1) {
    $('#acordeon').accordion()
  }

  // Reloj
  if(window.location.href.indexOf('reloj') > -1) {
    var reloj = $('#reloj')

    setInterval(() => {
      var hora = moment().format('hh:mm:ss')
      reloj.html(hora)
    }, 1000)
  }

  // Formulario contacto
  if(window.location.href.indexOf('contact') > -1) {
    $.validate({
      lang: 'es',
    })
  }
})
