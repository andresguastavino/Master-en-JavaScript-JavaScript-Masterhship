function getNumeroNoTipado(numero) {
    return 'El numero es: ' + numero;
}
function getNumeroTipado(numero) {
    if (numero === void 0) { numero = 12; }
    return 'El numero es: ' + numero;
}
console.log(getNumeroNoTipado('Esto no es tipado (NT)'));
console.log(getNumeroNoTipado(32 + ' (NT)'));
console.log(getNumeroNoTipado('Las 3 lineas siguientes si son de la funcion tipada (NT)'));
console.log(getNumeroTipado());
console.log(getNumeroTipado(35));
console.log(getNumeroTipado('Esto es tipado asi que esto va a dar un error de compilacion'));
