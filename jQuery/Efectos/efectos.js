$(document).ready(function() {
  var caja1 = $('div#caja1')
  var caja2 = $('div#caja2')
  var caja3 = $('div#caja3')
  var btnMostrar = $('button#mostrar')
  var btnOcultar = $('button#ocultar')

  caja1.hide()
  caja2.hide()
  caja3.hide()
  btnOcultar.hide()

  btnMostrar.click(function() {
    $(this).hide()
    btnOcultar.show()

    caja1.fadeIn('slow')
    caja2.show('fast')
    caja3.fadeTo('fast', 0.5)
  })

  btnOcultar.click(function() {
    $(this).hide()
    btnMostrar.show()

    caja1.fadeOut('slow')
    caja2.hide('fast')
    caja3.fadeTo('fast', 0.2)
  })

  // Otros: toggle, fadeToggle, slideToggle, slideUp, slideDown

})
