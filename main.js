import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

//make the canvas transparent
const canvas = document.getElementById('canvas');

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

camera.position.z = 3.5;
camera.position.y = 0.5;
camera.position.x = 0;
// camera.lookAt(0, 0.5, 0);

// axis helper
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// add light
const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

// add new light
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);


// add controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;



//


//glb loader
loader.load('./assets/glb/tbody.glb', function (gltf) {
    gltf.scene.scale.set(1.2, 1.2, 1.2);
    gltf.scene.position.set(0, -0.7, 0);
    gltf.scene.rotateX(0.1)
    // gltf.scene.rotateY(-0.8);
    scene.add(gltf.scene);
})







const animate = function () {

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // controls.update();

}

animate();
