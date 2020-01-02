'use strict'

var num = parseInt(prompt("Ingrese un numero (mayor a 0) para ver sus divisores"))

if(num < 0 || isNaN(num))
  alert("Numero invalido, recargue la pagina para intentar nuevamente")
else {
  document.write('<h1> Los numeros divisores de ' + num + ' son:</h1>')

  for(var i = 1; i <= num; i++) {
    if(num %i == 0) {
      document.write(i + '<br>')
    }
  }
}
