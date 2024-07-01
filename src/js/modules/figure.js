import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import initFigure from './init-figure';

import { alphaT } from 'three/examples/jsm/nodes/Nodes.js';


export function figure() {

const { camera, scene, canvas, controls, renderer } = initFigure();

//изменение бэка у окна canvas
scene.background = new THREE.Color("#FCF9F2");

// Проценты от размера окна браузера
const percentageWidth = 0.5; // 80% от ширины окна
const percentageHeight = 0.6; // 50% от высоты окна

 let sizes = {
  width: window.innerWidth * percentageWidth,
  height: window.innerHeight * percentageHeight
};

// Установка размеров рендерера
renderer.setSize(sizes.width, sizes.height);

// camera.position.set(510, 365, 270);550
// camera.position.set(520, 600, 460); //liked

camera.position.set(300, 460, 310);

// const floor = new THREE.Mesh(new THREE.PlaneGeometry(600, 600, 100, 100), new THREE.MeshStandardMaterial({color: "#D9FFF1", wireframe: true, metalness: 0.2, roughness: 1}));

// floor.receiveShadow = true; 
// floor.rotation.x = -Math.PI * 0.5;
// scene.add(floor);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.9);
hemiLight.position.set(0, 100, 70);
scene.add(hemiLight);


const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);

dirLight.position.set(0, 200, 10);
dirLight.shadow.mapSize = new THREE.Vector2(100, 100);
scene.add(dirLight);


const rectLight = new THREE.RectAreaLight(0xffffff, 0, 9, 9);
rectLight.position.set(0, 5, 0);
rectLight.lookAt(0, 0, 0);
scene.add(rectLight);


const loader = new GLTFLoader();


loader.load("../../img/figure/kyte.glb", (gltf) => {
	console.log("success");
	console.log(gltf);


	gltf.scene.scale.set(0.09, 0.09, 0.09);
	scene.add(gltf.scene);
})

const tick = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};
tick();

/** Базовые обработчики событий длы поддержки ресайза */
window.addEventListener('resize', () => {
	// // Обновляем размеры
	// sizes.width = window.innerWidth;
	// sizes.height = window.innerHeight;

      // Обновляем размеры в процентах
    sizes.width = window.innerWidth * percentageWidth;
    sizes.height = window.innerHeight * percentageHeight;

	// Обновляем соотношение сторон камеры
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Обновляем renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.render(scene, camera);
});






//Открытие фулскина при двойном клике

// window.addEventListener('dblclick', () => {
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });


//Указываем условия для выхода из полноэкранного режима

// document.addEventListener('fullscreenchange', () => {
//     if (!document.fullscreenElement) {
//         sizes.width = 1100;
//         sizes.height = 569;
//         camera.aspect = sizes.width / sizes.height;
//         camera.updateProjectionMatrix();
//         renderer.setSize(sizes.width, sizes.height);
//         renderer.setPixelRatio(window.devicePixelRatio);
//         renderer.render(scene, camera);
//     }
// });
// }
}