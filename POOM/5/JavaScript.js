//Se crea un arreglo, su cantidad de posiciones se usara despues
var vg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Se crea un contador que se usara despues
var i = 0
alert("Hola usuario, mi nombre es Prometheus, soy un simple codigo un una simple pregunta")
alert("Cuales son tus 10 sagas favoritas de videojuegos?")
//Se crea un forEach, el cual ejecutara una funcion tantas veces como la cantidad de posiciones
//del arreglo vg
vg.forEach(asking)
//Se crea una funcion la cual sera ejecutada por el forEach
function asking (){
//se usa el contador para interactuar con cada posicion del arreglo
	vg [i] = prompt("Inserte una saga")
	if (i > 0 && i <= 9){
	vg [i] = " " + vg [i] 
	}
	i++
}
//Se imprimen los resultados, confirmando que el codigo funciono por completo
document.write("Estas son sus 10 sagas de videojuegos favoritas: " + vg)