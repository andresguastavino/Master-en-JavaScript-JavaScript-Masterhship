// Reloj
if(window.location.href.indexOf('reloj') > -1) {
  var reloj = $('#reloj')

  setInterval(() => {
    var hora = moment().format('hh:mm:ss')
    reloj.html(hora)
  }, 1000)
}
