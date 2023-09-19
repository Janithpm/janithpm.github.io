import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GUI } from 'dat.gui'

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

camera.position.z = 6;
camera.position.y = 1.3;
camera.position.x = -2.6;
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
const gui = new GUI()


//glb loader
loader.load('./assets/glb/1.glb', function (gltf) {

    const body = gltf.scene

    body.scale.set(2, 2, 2);
    body.position.set(0, -0.7, 0);
    body.rotateX(0.1)
    body.rotateY(-0.45)
    body.rotateZ(0.03)
    scene.add(body);



    const bodyFolder = gui.addFolder('Body')
    bodyFolder.add(body.position, 'x', -10, 10)
    bodyFolder.add(body.position, 'y', -10, 10)
    bodyFolder.add(body.position, 'z', -10, 10)

    const rotation = gui.addFolder('Body Rotaion')
    rotation.add(body.rotation, 'x', -Math.Pi * 180, Math.Pi * 180)
    rotation.add(body.rotation, 'y', -Math.Pi * 180, Math.Pi * 180)
    rotation.add(body.rotation, 'z', -Math.Pi * 180, Math.Pi * 180)

    const scale = gui.addFolder('Body Scale')
    scale.add(body.scale, 'x', 0, 10)
    scale.add(body.scale, 'y', 0, 10)
    scale.add(body.scale, 'z', 0, 10)
    scale.open()


})


const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'z', 0, 10)
cameraFolder.add(camera.position, 'x', -10, 10)
cameraFolder.add(camera.position, 'y', -10, 10)

// add camera control move to diganonal direction
cameraFolder.add(camera, 'fov', 0, 180).onChange(() => {
    camera.updateProjectionMatrix()
})


cameraFolder.open()










const animate = function () {

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // controls.update();

}

animate();
