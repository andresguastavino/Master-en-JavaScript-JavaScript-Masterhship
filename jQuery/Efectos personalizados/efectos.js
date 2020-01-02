$(document).ready(() => {
  var active = false
  var btn = $('#animar')
  var caja = $('#caja')
  var body = $('body')

  btn.click(() => {
    if(active) {
      caja.animate({marginLeft: '0px',
                    width: '200px',
                    height: '100px',
                    fontSize: '16px',
                    lineHeight: '100px'}, 'fast', () => { alert('Gracias wacho ;)') })
      active = false
    } else {

      caja.animate({marginLeft: '500px'}, 'fast')
          .animate({width: '400px',
                    height: '200px'}, 'fast')
          .animate({fontSize: '40px',
                    lineHeight: '100px'}, 'fast', () => { alert('\t\t!?!?!? Que haces?\n\tMe rompiste la pagina\nDejalo como estaba o te rompo la cabeza') })
      active = true
    }
  })
})
