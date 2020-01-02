'use strict'


var limiteInf = parseInt(prompt("Ingrese un numero. Este sera el limite inferior", 0));
var limiteSup = parseInt(prompt("Ingrese un numero. Este sera el limite superior", 100));

if(limiteSup < limiteInf)
  alert("El limite superior no puede ser menor al limite inferior. Recargue la pagina para intentar nuevamente")
else {
  document.write('<h1>Del ' + limiteInf + ' al ' + limiteSup + ' los numeros impares son:</h1>')
  for(var i = limiteInf; i <= limiteSup; i++) {
    if(i %2 != 0) {
      document.write('<p>' + i + '</p>')
    }
  }
}
