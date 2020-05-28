var dog = 1, cat = 1, kid = 1
alert("Los bomberos son llamados de emergencia a rescatar un bebe un perro y un gato en un"+
	"edificio que esta en llamas. Todos estan en un piso alto. El bombero tiene que escoger"+
	"como rescatar a los tres individuos. Solo puede llevar uno a la vez. "+
	"El perro y el gato tienen collar y se pueden amarrar. Pero el perro no "+
	"se puede quedar con el gato sin vigilancia porque se lo come. Ni tampoco con el bebe "+
	"sin vigilancia porque lo muerde. Debes poder bajar a los tres uno por uno sin que pase lo anterior.")

while (true){
	var a = prompt("a quien quieres mover? (todas las respuestas en minuscula)")
	if (a=="perro"){
		dog=dog*-1
	}else if (a=="gato"){
		if (dog==kid){
			alert("no puedes dejar al bebe con el perro sin vigilancia")
		}else{
			cat=cat*-1
		}
	}else if (a=="ni\361o"){
		if (dog==cat){
			alert("no puedes dejar al gato con el perro sin vigilancia")
		}else{
			kid=kid*-1
		}
	}else{
		alert("comando invalido")
	}
	if (dog==cat && cat==kid && kid == -1){
		alert("Felicidades, has ganado")
		break;
	}
}