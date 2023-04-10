import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 10

scene.add(camera)

const canvas = document.getElementById('canvas')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 5

const geometry = new THREE.SphereGeometry(1.5, 32, 32)
const material = new THREE.MeshStandardMaterial({color: 0x00fff0})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)


const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)


const animate = function () {
    controls.update()
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();