
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import init from './init';

import { alphaT } from 'three/examples/jsm/nodes/Nodes.js';


export function dome() {
  try {

  const { camera, scene, controls, renderer } = init();

  //изменение бэка у окна canvas
  scene.background = new THREE.Color("#FCF9F2");

  // Проценты от размера окна браузера
  let percentageWidth = 0.5; // 50% от ширины окна
  let percentageHeight = 0.6; // 60% от высоты окна

  let sizes = {
    width: window.innerWidth * percentageWidth,
    height: window.innerHeight * percentageHeight
  };

  // Установка размеров рендерера
  renderer.setSize(sizes.width, sizes.height);
  camera.position.set(510, 365, 270);


  const handleResize = () => {
      if (window.innerWidth < 1100) {
        percentageWidth = 0.9; // изменяем значение percentageWidth на 90% от ширины окна
        percentageHeight = 0.5; // изменяем значение percentageHeight на 50% от высоты окна
      }
      // Обновляем размеры в процентах
      let sizes = {
        width: window.innerWidth * percentageWidth,
        height: window.innerHeight * percentageHeight
      };

      // Обновляем соотношение сторон камеры
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

        // Обновляем renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.render(scene, camera);
    };

    /** Базовые обработчики событий для поддержки ресайза */
    window.addEventListener('resize', handleResize);

    const loader = new GLTFLoader();

    loader.load("../../img/dome/dome.gltf", (gltf) => {
      gltf.scene.scale.set(0.1, 0.1, 0.1);
      scene.add(gltf.scene);
    },  undefined, (error) => {
      console.error('An error happened during loading model:', error);
    });

    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();

    // Инициализация освещения
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

  } catch (error) {
    console.error('An error occurred in the dome function:', error);
  }
}