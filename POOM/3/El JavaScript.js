//Declaraaciones de variables y arreglos
var i = null;
var codEst = new Array();
var namEst = new Array();
var apEst = new Array();
var fecEst = new Array();
var edEst = new Array();
var didEst = new Array();
var curEst = new Array();
var not1Est = new Array();
var not2Est = new Array();
var not3Est = new Array();
var not4Est = new Array();
var promEst = new Array();
//Asignacion de datos en los arreglos
codEst=[1,2,3,4,5,6,7,8,9,10];
namEst=["Asriel","Oliver","Nero","Hernest","Thomas","Dante","Aran","Zefraath","Arturia","Marcelo"];
apEst=["Mussolini","Chamberlain","Truman","Hitler","Roosevelt","de Gaulle","Churcill","Stalin","Franco","Hirohito"];
fecEst = ["13/04/2002","10/02/2002","05/01/2000","01/01/2001","15/06/2001","15/08/2003","18/05/2002","31/12/2003","17/11/2001","18/10/2002"];
curEst=["Once","Once","Once","Once","Once","Once","Once","Once","Once","Once"];
not1Est=[33,87,56,74,45,65,67,45,56,98];
not2Est=[43,79,36,65,67,87,86,65,65,98];
not3Est=[53,76,73,35,45,98,76,73,25,95];
not4Est=[65,87,65,87,76,65,66,84,67,93];
//Funcion principal (ejecutada con el boton)
function code(){
//Lectura del codigo a consultar
	i = document.getElementById("code").value;
	var i = parseInt(i, 10);
//	alert("EL codigo seleccionado es: " + i)
	i--;
//Promedio de las 4 notas
	for (var x = 0; x <= 9; x++) {
		promEst[x]=(not1Est[x]+not2Est[x]+not3Est[x]+not4Est[x])/4
	}
//Fecha de hoy
	fecha_actual = new Date();
//	alert(fecha_actual);
//	alert(fecha_actual.getDate() + "/" + (fecha_actual.getMonth() +1) + "/" + fecha_actual.getFullYear());
//Fecha de nacimiento
	var fecBir = fecEst[i].split("/");
//	alert(fecBir);
//	alert(fecBir[2]);
//Calculo de edad teorica
	edad = fecha_actual.getFullYear() - fecBir[2]; //-1 porque no se si ha cumplido años ya este año 
	var trueMonth = fecha_actual.getMonth() + 1;
	var montDiff= trueMonth - fecBir[1];
	var dayDiff = fecha_actual.getDate() - fecBir[0];
//Calculo de edad teniendo en cuenta los meses y dias
    if (montDiff < 0){
    	edad--;
    }else if (montDiff > 0) {
    	edad=edad
    }else if(dayDiff < 0) {
    	edad--;
    }
    edEst[i] = edad;
//    alert(edad);
//Conversion de fecha de nacimiento a array
	var fch1 = fecEst[i].split("/");
//	alert(fch1);
//Calculo de dias pasados desde su dia de nacimiento
//Codigo que da como resultado el numero de milisegundos pasados desde Enero 1 de 1970 a las 00:00:00, hasta la fecha dada
 var fFecha1 = Date.UTC(fch1[2],fch1[1]-1,fch1[0]);
 var fFecha2 = Date.UTC(fecha_actual.getFullYear(),fecha_actual.getMonth(),fecha_actual.getDate());
 //Diferencia de milisegundos entre la fecha de nacimiento y la actual
 var dif = fFecha2 - fFecha1;
 //Conversion del resultado de milisegundos a segundos, despues a minutos, despues a horas y finalmente a dias
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 didEst[i] = dias;
//Impresion de resultados
	document.write("<br>" + "El codigo del estudiante es: " + codEst[i] + "<br>");
	document.write("<br>" + "El nombre del estudiante es: " + namEst[i] + "<br>");
	document.write("<br>" + "El apellido del estudiante es: " + apEst[i] + "<br>");
	document.write("<br>" + "La fecha de nacimiento del estudiante es: " + fecEst[i] + "<br>");
	document.write("<br>" + "El curso del estudiante es: " + curEst[i] + "<br>");
	document.write("<br>" + "La nota 1 del estudiante es: " + not1Est[i] + "<br>");
	document.write("<br>" + "La nota 2 del estudiante es: " + not2Est[i] + "<br>");
	document.write("<br>" + "La nota 3 del estudiante es: " + not3Est[i] + "<br>");
	document.write("<br>" + "La nota 4 del estudiante es: " + not4Est[i] + "<br>");
	document.write("<br>" + "El promedio de las notas del estudiante es: " + promEst[i] + "<br>");
	document.write("<br>" + "La edad del estudiante es: " + edEst[i] + "<br>");
	document.write("<br>" + "La edad en dias del estudiante es: " + didEst[i] + "<br>");
}