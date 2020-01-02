var num1 = parseInt(prompt('Ingrese un numero'))

while(num1 <= 0 || isNaN(num1)) {
	num1 = parseInt(prompt('Numero ingresado no valido. Por favor ingrese un NUMERO mayor a 0'))
}

var num2 = parseInt(prompt('Ingrese un numero'))

while(num2 <= 0 || isNaN(num2)) {
	num2 = parseInt(prompt('Numero ingresado no valido. Por favor ingrese un NUMERO mayor a 0'))
}

if(num1 > num2)
	alert('El numero ' + num1 + ' es mayor al numero ' + num2)
else if(num2 > num1)
	alert('El numero ' + num2 + ' es mayor al numero ' + num1)
else
	alert('El numero ' + num1 + ' es igual al numero ' + num2)