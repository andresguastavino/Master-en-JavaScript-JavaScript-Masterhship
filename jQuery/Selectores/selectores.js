$(document).ready(() => {
  // Selectores de ID $('#<id>')
  $('#rojo').css('color', 'red')

  // Puedo guardarlo en una variable
  var verde = $('#verde')
  verde.css('color', 'green')
  verde.css('background-color', 'yellow')
  verde.css('font-weight', 'bold')

  // Puedo encadenar los estilos que le doy
  $('#azul').css('background-color', 'black')
            .css('color', 'blue')
            .css('font-size', '30px')

  // Selectores de clase $('.<clase>')
  // Si hay elementos que comparten clases me trae un array
  var verdes = $('.verde')
  console.log(verdes)

  verdes.css('color', 'green')

  $('.clickeable').click(function() {
    $(this).css('font-size', '20px')
           .css('text-decoration', 'underline')
           .css('font-weight', 'bold')
  })

  $('.negro').css('background-color', 'black')
  $('.rojo').css('background-color', 'red')

  // Selectores de etiqueta $('<etiqueta>')
  var parrafos = $('p')

  parrafos.click(function() {
    var parrafo = $(this)
    if(parrafo.hasClass('crossed'))
      parrafo.removeClass('crossed')
    else
      parrafo.addClass('crossed')
  })

  // Selectores de atributos $('[atributo="valor"]')
  var google = $('[title="Google"]')
  google.css('background-color', '#000')
        .css('color', '#FFF')

  $('[title="Facebook"]').css('background-color', 'blue')
                         .css('color', '#FFF')

  // Otros
  // Selector multiple
  $('p, li').css('font-family', 'Georgia, serif')

  // Buscar elementos dentro de elemnto contenedor/padre
  var busqueda = $('#parrafos').find('#rojo')
  console.log(busqueda)

  // Salir del elemento actual hacia el elemento padre
  var padreBusqueda = busqueda.parent()
  console.log(padreBusqueda)

  // Si salgo de nuevo agarro el body
  var body = padreBusqueda.parent()
  console.log(body)
})
