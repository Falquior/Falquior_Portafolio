//Este archivo nos va a construir una figura geometrica
//y luego la vamos a mirar o revisar de diferentes cosas
//	Creado por: Francisco Javier Melo Rubio creado en: 22-04-2022
//	Elementos fundamentales para crear una animacion: Escena, camara, render, el objeto.
//	Las siguientes lineas crean la escena, la camara y el render
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);	
var renderer = new THREE.WebGLRenderer();
//La siguiente linea establece el tamaño del render
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//Las siguientes lineas crean el objeto del cubo, estableciendo tanto sus dimensiones como su material 
//y color
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00aa00}); 
var cube = new THREE.Mesh(geometry, material);
//La siguiente linea añade el cubo a la escena
scene.add(cube);
//Las siguientes lineas crean el objeto del circulo, estableciendo tanto sus dimensiones como su material 
//y color
var geometry2 = new THREE.CircleGeometry(1, 32);
var material2 = new THREE.MeshBasicMaterial({color: 0x00aaff}); 
var circle = new THREE.Mesh(geometry2, material2);
//La siguiente linea añade el circulo a la escena
scene.add(circle);
//La siguiente linea establece la posicion de la camara en el eje z(lo lejos o cerca que estara de 
//los objetos)
camera.position.z = 2;
//Las siguientes lineas modifican la posicion de los objetos en el eje x para que no se superpongan
cube.position.x -=1
circle.position.x +=1
//La siguiente funcion solicita la creacion de la animacion al equipo, renderiza la escena con las figuras 
//y la camara, y finalmente añade la rotacion a los objetos
var animate = function (){
	requestAnimationFrame (animate);
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;
	circle.rotation.x -= 0.02;
	circle.rotation.y -= 0.02;
	renderer.render(scene, camera)
};
//La siguiente llama a la funcion animate
animate();