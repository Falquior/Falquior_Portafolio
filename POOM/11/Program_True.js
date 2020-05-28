var renderer;
var scene;
var camera;
	function init() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(45, window.innerWidth /window.innerHeight, 0.1, 1000);
	//En esta parte se crea el render:
	//-Establece el color del fondo (Se le da la propiedad alpha al render para poder volverlo transparente,
	//dejando como fondo la imagen del background)
	//-Establece el tamaño
	//-Activa opciones como que permita la aparicion de sombras
		renderer = new THREE.WebGLRenderer({alpha:true});
		renderer.physicallyCorrectLights = true;
		renderer.gammaInput = true;
		renderer.gammaOutput = true;
		renderer.shadowMap.enabled = true;
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setClearColor(0.000000, 0);
	//En esta parte se crea la superficie plana
	//-Se establece el material
	//-Se establece el color
	//-Se establece el tamaño
		var planeGeometry = new THREE.PlaneGeometry(20, 20);
		var planeMaterial = new THREE.MeshLambertMaterial({color: 0x3B240B});
		var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	// En esta parte se crea el cubo
	//-Se establece el material
	//-Se establece el color
	//-Se establece el tamaño
		var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);
		var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x173B0B,transparent:true, opacity:0.8});
		var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
		camera.lookAt(scene.position);
	//En esta parte se crea la luz
	//-Se establece el color
	//-Se establece la direccion
	//-Se establece el tamaño
	//-Se establece la intensidad
		var ambient = new THREE.AmbientLight(0xB45F04,0.9);
		scene.add(ambient);
		var light = new THREE.DirectionalLight(0xB45F04, 1, 100, 2 );
	//En esta parte se añaden a la escena todos los elementos
		scene.add(plane);
		scene.add(cube);
		scene.add(light);
	//En esta parte se establece la posicion de los elementos
		plane.position.set(0, -2, 0);
		camera.position.set(15, 10, 53);
		light.position.set(10, 20 , 20);
	//En esta parte se establece la rotacion de cada elemento
		plane.rotation.x = -0.5 * Math.PI;
	//En esta parte se establecen las sombras de cada elemento
		plane.receiveShadow = true;
		cube.castShadow=true;
		light.castShadow = true;
		document.body.appendChild(renderer.domElement);
		addVertices(cube);
		render();
}
	//Esta funcion añade las esferas a los vertices del cubo
function addVertices(mesh) {
	var vertices = mesh.geometry.vertices;
	var vertexMaterial = new THREE.MeshPhongMaterial({color: 0x2A120A});
	vertices.forEach(function (vertex) {
		var vertexSphere = new THREE.SphereGeometry(0.15);
		var vertexMesh = new THREE.Mesh(vertexSphere, vertexMaterial);
		vertexMesh.position.copy(vertex);
		scene.add(vertexMesh);
	});
}
//Esta funcion le da un movimiento rotatorio a la camara
function render() {
	var rotSpeed = 0.01;
	camera.position.x = camera.position.x * Math.cos(rotSpeed) +
	camera.position.z * Math.sin(rotSpeed);
	camera.position.z = camera.position.z * Math.cos(rotSpeed) -
	camera.position.x * Math.sin(rotSpeed);
	camera.lookAt(scene.position);
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
function handleResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("DOMContentLoaded", function(event) {
	init();
});
window.addEventListener('resize', handleResize, false);