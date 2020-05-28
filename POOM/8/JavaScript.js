//+: suma 2 valores o variables
var a=1, b=2, c;
c=b+a;
alert(c)
//-: resta 2 valores o variables
var a=1, b=2, c;
c=b-a;
alert(c)
//=: asigna un valor a una variable
var a=1, b;
b=a;
alert(b)
//==: compara valor de una variable
var a=1, b=1;
if (a==b){
	alert("las variables tienen el mismo valor")
}else{
	alert("las variables no tienen el mismo valor")
}
//====: compara valor y tipo de una variable
var a=1, b="1";
if (a===b){
	alert("las variables tienen el mismo valor y tipo de variable")
}else{
	alert("las variables no tienen el mismo valor o tipo de variable")
}
//++: suma 1 a una variable
var a=1;
a++;
alert(a)
//--: resta 1 a una variable
var b=1;
b--;
alert(b)
//string: Almacena caracteres alfabeticos
var a="Hola"
alert(a)
//integer: Almacena numeros enteros
var a=1
alert(a)
//float: Almacena numeros reales
var a=1.5
alert(a)
//boolean: Tiene de valor verdadero o falso
var a=true
alert(a)
//array: Almacena una lista de valores
var a=[1,2,3];
alert(a)
//object: Almacena mas variables
var a={
	nombre:"Francisco",
	apellido:"Melo",
	carrera:"Ing. Multimedia"
}
alert(a.nombre)
alert(a.apellido)
alert(a.carrera)