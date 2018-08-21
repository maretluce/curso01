'use strict'
/*
Tarea: Mostrar todos los números que hay entre dos números ingresados por el usuario.
*/

//captura num01
var num01 = parseInt(prompt("ingrese el primer número"));

//valida si num01 es número
while(isNaN(num01)) {
	num01 = parseInt(prompt("El valor ingresado NO es un número. Ingrese el primer número nuevamente"));
}

//captura num02
var num02 = parseInt(prompt("ingrese el segundo número")); 
//valida si num02 es número
while(isNaN(num02)) {
	num02 = parseInt(prompt("El valor ingresado NO es un número. Ingrese el segundo número nuevamente"));
}

alert("los números impares entre el "+num01+" y "+num02+" son:");


if( num01 + 1 == num02 || num01 - 1 == num02 ) {
	alert("Ups! no hay números entre "+num01+" y "+num02);	
}else if( num01 > num02 ){
	//muestra los números entre num01 y num02, cuando num01>num02
	for (var i = num01-1; i > num02; i--) {	
		if(i % 2 == 1 || i % 2 == -1) {
			alert(i);
		}
	}	
}else if( num01 < num02 ){
	//muestra los números entre num01 y num02, cuando num01<num02
	for (var i = num01+1; i < num02; i++) {		
		if(i % 2 == 1 || i % 2 == -1) {
			alert(i);
		}
	}
}
else {
	alert("Ups! los números "+num01+" y "+num02+" son iguales");
}




//4 y 8
//5, 7

//-4 y 2
//-3, -1, 1

//8 y 4
//7, 5

//2 y -4
//1, -1, -3