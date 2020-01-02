$(document).ready(() => {

  // Load
  $('div#datos1').load('https://reqres.in/')

  // Get
  $.get('https://reqres.in/api/users', {page:2}, (response) => {
      response.data.forEach((element, index) => {
        $('div#datos2').append(`<p>${element.first_name} ${element.last_name}</p>`)
      })
  })

  // Post
  $('form').submit((event) => {
    event.preventDefault()

    var usuario = {
      name: $('input[name="name"]').val(),
      job: $('input[name="job"]').val()
    }

    // Post
    /*
    $.post('https://reqres.in/api/users', usuario, (response) => {
      console.log(response)
    })
    .done(() => {
      alert('Usuario aniadido correctamente')
    })
    */

    // Ajax
    $.ajax({
      type: 'POST',
      url: 'https://reqres.in/api/users',
      data: usuario,
      beforeSend: () => {
        console.log('Agregando usuario a la base de datos')
      },
      success: (response) => {
        console.log(response)
      },
      error: () => {
        console.log('Ha ocurrido un error')
      },
      timeout: 10000
    })
  })
})
