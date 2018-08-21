'use strict'
/*
Tarea: Mostrar todos los números divisores del número que ingrese el usuario.
*/

//captura num01
var num = parseInt(prompt("ingrese un número"));

//valida si num01 es número
while(isNaN(num) || num <= 0 || Number.isInteger(num) == false) {
	num = parseInt(prompt("El valor ingresado NO es un número o es un número menor o igual a cero o NO en entero. Ingrese un número valido"));
}

alert("los divisores de "+num+" son: ");

//recorre de 1 a num 
for(var i=1; i <= num; i++) {
	//verifica los números divisores de num
	if(num % i == 0) {
		alert(i);
	}
}

//10 -> 1, 2, 5, 10