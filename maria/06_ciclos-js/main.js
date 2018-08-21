'use strict'
/*
Tarea: Mostrar si un número es par o impar.
*/

//Captura el número
var num = parseInt(prompt("Ingrese un número"));

//Calcula el modulo
var mod = num % 2;

//Valida si num es número
while(isNaN(num)){
	num = parseInt(prompt("El valor ingresado NO es valido. Vuelva a ingresar un número."));
}

//Valida si num es par o impar
if (mod == 0){
	document.write("El número "+num+" es par");
}else {
	document.write("El número "+num+" es impar");
}	