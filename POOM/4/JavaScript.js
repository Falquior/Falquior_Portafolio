//Se crea un contador para ennumerar cada año biciesto
var counter = 1
//Se busca la fecha actual, para que asi el codigo no se deba modificar con cada año
fecha_actual = new Date();
//Se crea un for donde la condicion sea el mismo año para que aparte de sacar todos los
//años bisiestos, no se pase del actual, el cual se actualizara cada que se ejecute el codigo
//gracias al getFullYear()
for (var bis = 1900; bis <= fecha_actual.getFullYear(); bis=bis+4) {
//Imprime cada año bisiesto desde 1900 ennumerado
	document.write("<br> Leap year number " + counter + " = " + bis)
	counter ++
}