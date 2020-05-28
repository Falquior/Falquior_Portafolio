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
//Ejemplo 1
//Las siguientes crean el objeto de la esfera
var geometry = new THREE.SphereGeometry(9, 12, 12);
var material = new THREE.MeshDepthMaterial ({color: 0x0011ff});
var sphere = new THREE.Mesh(geometry, wireframe);
//La siguiente linea crea una estructura con la forma de la esfera
var wireframe = new THREE.WireframeGeometry( geometry );
 //La siguiente linea crea el objeto de una linea, que adoptara la forma de la estructura de la esfera
var line = new THREE.LineSegments( wireframe );
//La siguiente linea lidia con el material base de la linea
line.material.depthTest = false;
line.material.transparent = false;
//La siguiente linea añade la linea convertida en esfera a la escena
scene.add( line );
//La siguiente linea establece la posicion de la camara en el eje z(lo lejos o cerca que estara de 
//los objetos)
camera.position.z = 0;
//La siguiente funcion solicita la creacion de la animacion al equipo, renderiza la escena con la figura 
//y la camara, y finalmente añade la rotacion al objeto
var animate = function (){
	requestAnimationFrame (animate);
	line.rotation.x += 0.02;
	line.rotation.y += 0.02;
	renderer.render(scene, camera);
};
//La siguiente llama a la funcion animate
animate();
//Final del ejemplo uno
//Este es un ejemplo alterno con un cubo, para probarlo comentar toda linea del ejemplo 1 y descomentar 
//el ejemplo de abajo usando y eliminando los /* y */
/*var geometry = new THREE.SphereGeometry( 5, 32, 32 );
var material = new THREE.MeshDepthMaterial({color: 0x00ff33}); 
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 2;
//La siguiente funcion solicita la creacion de la animacion al equipo, renderiza la escena con la figura 
//y la camara, y finalmente añade la rotacion al objeto
var animate = function (){
	requestAnimationFrame (animate);
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;
	renderer.render(scene, camera);
};*/