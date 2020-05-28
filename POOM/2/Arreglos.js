//Este documento es mi trabajo sobre arreglos y sus variantes
//Hecho por Francisco Melo el dia 04/03/2020
//Declaracion de un arreglo
//se declara una variable y se asigna al arreglo
var fruta=[];
document.write("Que tiene el arreglo de fruta " + fruta + " Esta vacio" + "<br>");
//Segunda forma de declarar un arreglo
var fruta = new Array();
fruta=["Guama"];
document.write("<br> Que tiene ahor el arreglo de fruta: " + fruta + "<br>");
//Se llena un arreglo con muchos elementos
var frutas=["Manzanas"," Bananos"," Cerezas"," Naranjas", " Peras"];
//Se muestra el arreglo en pantalla
document.write("<br> Estas son las frutas del arreglo: " + frutas + "<br>");
//Se escogen elementos especificos del arreglo (", " se usa para separar cada elemento con una coma)
document.write("<br>" + frutas [0] + "<br>");
document.write("<br>" + frutas [0] + ", " + frutas[2] + "<br>");
//Quiero saber cual es el primer elemento del arreglo
var primero = frutas[0];
//Quiero saber cual es el ultimo elemento del arreglo (Al length se le coloca -1 por que no cuenta el tamaño del arreglo desde 0 sino desde uno)
var ultima = frutas[frutas.length -1];
document.write("<br> Esta es la primera fruta de mi arreglo: " + primero + "<br>");
document.write("<br> Esta es la ultima fruta de mi arreglo: " + ultima + "<br>");
//Añadir un elemento al final de un arreglo
var nuevalongitud = frutas.push(' Papaya');
//Aqui muestro el tamaño del arreglo y los elementos del mismo
document.write("<br> Esta es la ultima longitud del arreglo de frutas: " + nuevalongitud + "<br>");
document.write("<br> Estas son las frutas del arreglo: " + frutas + "<br>");
var nuevalongitud = frutas.push(' Limon', ' Freijoa');
document.write("<br> Esta es la ultima longitud del arreglo de frutas: " + nuevalongitud + "<br>");
document.write("<br> Estas son las frutas del arreglo: " + frutas + "<br>");
//Eliminar elemento del arreglo
var ultimo = frutas.pop();
document.write("<dr> Esta es la ultima fruta de mi arreglo" + ultimo + "<br>");