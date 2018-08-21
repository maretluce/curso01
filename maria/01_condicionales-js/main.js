'use strict'
/*
Tarea: Programa que pide dos números y dice cúal es mayor, cúal es menor ó si son iguales.
PLUS: Si los números no son un número o son menores ó iguales a cero, no los vuelva a pedir.
*/

//Pide el primer dato
var num01 = parseInt(prompt("ingrese el primer número",0)); 

if ( isNaN(num01) == false ) {
	
	//Pide el segundo dato
	var num02 = prompt("ingrese el segundo número","0"); 

	if ( typeof num02 == 'number' ) {

		//Convierte los números en entero
		var num01_conv = parseInt(num01); 
		var num02_conv = parseInt(num02); 

		if ( num01_conv == num02_conv ){
			alert(num01_conv+" y "+num02_conv+" son iguales");
		}
		else if ( num01_conv > num02_conv ){
			alert(num01_conv+" es el número mayor");
			alert(num02_conv+" es el número menor");
		}
		else if ( num01_conv < num02_conv ){
			alert(num02_conv+" es el número mayor");
			alert(num01_conv+" es el número menor");
		}else if ( typeof num01 == 'string'){
			alert("El valor ingresado es un string");
		}else if ( typeof num02 == 'string'){
			alert("El valor ingresado es un string");
		}
		else {
			alert("No ingreso valores validos");
		}
	}

}else if ( isNaN(num01) == true ){
	alert("El primer valor ingresado "+num01+" es un string");
}