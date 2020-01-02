$(document).ready(function() {
  cargarLinks()

  $('#button').click(function() {
    var input = $('#nuevo_enlace')
    var nuevo_enlace = input.val()

    $('ul').prepend(`<li><a href="${nuevo_enlace}">${nuevo_enlace}</a></li>`)
    input.val('')
  })
})

function cargarLinks() {
  $('a').each(function(index) {
    var a = $(this)
    var enlace = a.attr('href')
    a.text(enlace)
  })
}
