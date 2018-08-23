'use strict'
/*
Tarea: Mostrar la media y la suma de los resultados hasta que introduzca un número negativo.
*/

var sum = 0;
var n = 0;
var num = parseInt(prompt("ingrese un número",0));

while (num >= 0){
	sum = sum+num;
	num = parseInt(prompt("ingrese otro número",0));
	n++;
}

var prom = sum / n;
alert("La suma de los números ingresados es: "+sum);
alert("La media de los números ingresados es: "+prom);