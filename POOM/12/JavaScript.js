
//En este apartado se crean la escena y la camara
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);	

//En este apartado se crea el render, donde:
//Se le da un tamaño igual al de la ventana
//Se le asigna un fondo transparente
var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0.000000, 0);
document.body.appendChild(renderer.domElement);

//En esta parte se crea el material de los objetos, donde:
//Se carga una imagen
//Se usa esa imagen como textura para el material
const loader = new THREE.TextureLoader();
const texture = loader.load('Tierra.jpg');
var material = new THREE.MeshBasicMaterial({
  map: texture,
});
var material = new THREE.MeshBasicMaterial( { map: texture } );

//En esta parte se crea el plano, donde se le asigna lo siguiente:
//-Un radio, y una cantidad de segmentos en los que se divide a lo largo y ancho
//-Como material un imagen
//-Un cambio de posicion en x para que no se superponga con otros objetos
var sphereGeometry = new THREE.SphereGeometry( 8, 32, 32 );
var sphere = new THREE.Mesh(sphereGeometry, material);
scene.add( sphere );
sphere.position.x -= 20;

//En esta parte se crea el plano, donde se le asigna lo siguiente:
//-Un ancho y un alto
//-Como material un imagen
//-Un cambio de posicion en x para que no se superponga con otros objetos
var planeGeometry = new THREE.PlaneGeometry(37, 22);
var plane = new THREE.Mesh(planeGeometry, material);
scene.add( plane );
plane.position.x += 20;

//En esta parte se crea el cono, donde se le asigna lo siguiente:
//-Un radio
//-Una altura
//-Una cantidad de segmentos
var coneGeometry = new THREE.ConeGeometry( 5, 20, 32 );
var cone = new THREE.Mesh( coneGeometry, material );
scene.add( cone );
cone.position.x += 50;

//En esta parte se crea el cilindro, donde se le asigna lo siguiente:
//-Un radio superior y uno inferior
//-Una altura
//-Una cantidad de segmentos
var cylinderGeometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var cylinder = new THREE.Mesh( cylinderGeometry, material );
scene.add( cylinder );
cylinder.position.x -= 50;

//En esta parte se crea el anillo, donde se le asigna lo siguiente:
//-Un radio
//-Un grosor
//-Una cantidad de segmentos a lo largo y ancho del grosor
var torusGeometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
var torus = new THREE.Mesh( torusGeometry, material );
scene.add( torus );
torus.position.x -= 90;

//En esta parte se crea el nudo, donde se le asigna lo siguiente:
//-Un radio
//-Un grosor
//-Una cantidad de segmentos a lo largo y ancho del grosor
var torusKnotGeometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
var torusKnot = new THREE.Mesh( torusKnotGeometry, material );
scene.add( torusKnot );
torusKnot.position.x += 90;


//Se le da una posicion alejada a la camara, esto para que no quede muy cerca de los objetos
camera.position.z = 80;

//Se crea la funcion animate, donde:
//-Se le da rotacion a todas las figuras
//-Se le pide al render que rendericé la escena y la camara
var animate = function (){
	requestAnimationFrame (animate);
	sphere.rotation.y += 0.02;
	cylinder.rotation.y += 0.02;
	cone.rotation.y += 0.02;
	plane.rotation.y += 0.02;
	torus.rotation.y += 0.02;
	torusKnot.rotation.y += 0.02;
	renderer.render(scene, camera);
};

//Se llama a la funcion animate
animate();