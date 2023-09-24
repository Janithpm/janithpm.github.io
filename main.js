import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement);

camera.position.z = 1.8;
camera.position.y = 1.3;
camera.position.x = -0.8;

// add light
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);

var mixer
const model = new THREE.Group()

const setupAnimation = () => {
    model.rotateY(-0.45)
    model.rotateX(0.1)
    ScrollTrigger.matchMedia({ "(prefers-reduced-motion: no-preference)": desktopAnimation, "(max-width: 768px)": mobileAnimation })
}

const desktopAnimation = () => {

    const nav_links = document.querySelector(".nav-links")
    const hero_child = document.querySelectorAll(".hero-child")

    const loadingTl = gsap.timeline({
        default: {
            duration: 0.3,
            delay: 0.2,
            ease: "power2.inOut"
        }
    })

    loadingTl.from(".logo", {
        opacity: 0,
        x: -10,
    }).from(nav_links.children, {
        opacity: 0,
        x: 10,
        stagger: {
            amount: 1
        }
    }).from(hero_child, {
        opacity: 0,
        x: -10,
        stagger: {
            amount: 1
        }
    }).from("#canvas", {
        opacity: 0,
        x: 10,
    })

    let section = 0
    const tl = gsap.timeline({
        default: {
            duration: 1,
            ease: "power2.inOut"
        },
        scrollTrigger: {
            trigger: ".page",
            start: "top top",
            end: "bottom 30%",
            scrub: 0.1,
            onLeave: hideModel,
            onEnter: showModel,
            onEnterBack: showModel,
        }
    })

    tl.to(camera.position, { x: 0.5, y: 1.45, z: 1.3, duration: 0.8 }, section)
    tl.to(model.rotation, { x: 0.1, y: 0.4, z: 0, duration: 1 }, section)
    tl.to("#hero", {
        opacity: 0,
        x: -300,
        duration: 0.5
    }, section)
    tl.from('#who-am-i', {
        opacity: 0,
        x: 300,
        duration: 0.5,
        ease: "power2.inOut",
    }, section)

    section += 1
    tl.to(model.position, { x: 0, y: -0.1, z: 0, duration: 1 }, section)



    const service_child_left = document.querySelectorAll(".service_child_left")
    const service_child_right = document.querySelectorAll(".service_child_right")

    gsap.from(service_child_left, {
        scrollTrigger: {
            trigger: "#what-i-offer",
            start: "top 80%",
            end: "bottom 95%",
            scrub: 0.1,
        },
        duration: 1,
        ease: "power2.inOut",
        delay: 0.1,
        x: -50,
        opacity: 0,
        stagger: {
            amount: 1
        }
    })
    gsap.from(service_child_right, {
        scrollTrigger: {
            trigger: "#what-i-offer",
            start: "top 80%",
            end: "bottom 95%",
            scrub: 0.1,
        },
        duration: 1,
        ease: "power2.inOut",
        delay: 0.1,
        x: 50,
        opacity: 0,
        stagger: {
            amount: 1
        }
    })

    const my_work_right = document.querySelectorAll(".my_work_right")
    const my_work_left = document.querySelectorAll(".my_work_left")

    gsap.from(my_work_left, {
        scrollTrigger: {
            trigger: "#what-i-offer",
            start: "top 80%",
            end: "bottom 95%",
            scrub: 0.1,
        },
        duration: 1,
        ease: "power2.inOut",
        delay: 0.1,
        x: -50,
        opacity: 0,
        stagger: {
            amount: 1
        }
    })
    gsap.from(my_work_right, {
        scrollTrigger: {
            trigger: "#what-i-offer",
            start: "top 80%",
            end: "bottom 95%",
            scrub: 0.1,
        },
        duration: 1,
        ease: "power2.inOut",
        delay: 0.1,
        x: 50,
        opacity: 0,
        stagger: {
            amount: 1
        }
    })



}

const hideModel = () => {
    model.visible = false
}

const showModel = () => {
    model.visible = true
}


const mobileAnimation = () => {
    // do this later
}


const loadingManager = new THREE.LoadingManager(() => {
    setupAnimation()
});
const loader = new GLTFLoader(loadingManager);
loader.load('https://stylioo.blob.core.windows.net/images/idle.glb', function (gltf) {
    gltf.scene.traverse((item) => {
        if (item instanceof THREE.Mesh) {
            item.castShadow = true
            item.receiveShadow = true
        }
    })
    model.add(gltf.scene);
    mixer = new THREE.AnimationMixer(model);
    console.log(gltf.animations);
    const action = mixer.clipAction(gltf.animations[0]);
    action.loop = THREE.loop;
    action.play();
}, undefined, function (e) {

    console.error(e);

});

scene.add(model);


let clock = new THREE.Clock();
const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    const dt = clock.getDelta();

    if (mixer) mixer.update(dt);

}
animate();



// hero
// camera.position.set(-0.7, 1.4, 1.6);
// body.rotateX(0.1)
// body.rotateY(-0.45)


// about me
// camera.position.set(0.5, 1.4, 1.3);
// body.position.set(0.1, 0.4, 0);
// body.rotateX(0.1)
// body.rotateY(0.4)


// services
// camera.position.set(0, 1, 2.7);
// body.rotateX(0.1)
// body.rotateY(0)