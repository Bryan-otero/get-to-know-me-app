import './style.css'
import * as THREE from 'three';

//Note to self: methods are caps sensitive

//A kind of container that holds all the objects, cameras, and lights
const scene = new THREE.Scene();
//Sets up camera that mimics the human eyeball
//Attributes of the Camera method: (FOV, Aspect Ratio, View Frustum)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//Renderer aka what actually renders the graphics to the scene
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

//Renderer view setup
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

//Geometry of the object
//const geometry = new THREE.TorusGeometry(10,3,4,100);
const geometry = new THREE.BoxGeometry(10,10,10)

//Material wrapping of an object
const material = new THREE.MeshBasicMaterial({wireframe:true});
//const material = new THREE.MeshStandardMaterial();

const object = new THREE.Mesh(geometry,material);

scene.add(object);

//adds lighting to 3D object (If its a Standard Material)
// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5,5,5);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// pointLight.position.set(5,5,5);

// scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);
  object.rotation.x += 0.01;
  object.rotation.y += 0.01;
  object.rotation.z += 0.01;

  renderer.render(scene,camera);
}

//button functionality
const button1 = document.getElementById("button1");

button1.addEventListener("click", function() {
animate();
});