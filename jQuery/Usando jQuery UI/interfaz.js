$(document).ready(() => {

  // Mover elemento por la pagina
  $('.elemento').draggable()

  // Redimensionar elemento de la pagina
  $('#resizable').resizable()

  // Seleccionar elementos
  $('.lista-seleccionable').selectable()

  // Ordenar elementos
  $('.lista-ordenable').sortable({
    update: () => {
      alert('Has cambiado el orden de los elementos de la lista')
    }
  })

  // Arrastrar y soltar elementos (drop & drag)
  var area = $('#area')
  var movible = $('#movible')

  movible.draggable()

  area.droppable({
    accept: movible,
    drop: () => {
      alert('Has soltado algo dentro del area')
    },
    over: (event, ui) => {
      area.css('background-color', 'lightgreen')
      movible.css('background-color', 'red')
      movible.css('border-color', 'darkred')
    },
    out: () => {
      area.css('background-color', 'white')
      movible.css('background-color', 'white')
      movible.css('border-color', 'red')
    }
  })

  // Efectos
  $('#btn-mostrar').click(() => {
    $('#caja-efectos1').toggle('shake', 'slow')
    $('#caja-efectos2').toggle('blind', 'slow')
    $('#caja-efectos3').toggle('fold', 'slow')
    $('#caja-efectos4').toggle('puff', 'slow')
    $('#caja-efectos5').toggle('scale', 'slow')
    $('#caja-efectos6').toggle('explode', 'slow')
    $('#caja-efectos7').toggle('slide', 'slow')
  })

  // Tooltip
  $(document).tooltip()

  // Popup / Cuadro de dialogo
  $('#lanzarPopup').click(() => {
    $('#popup').dialog()
  })

  // Calendario / Datepicker
  $('#calendario').datepicker()

  // Tabs
  $('#tabs').tabs()
})
