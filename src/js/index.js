// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';


import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


Fancybox.bind('[data-fancybox]', {
	// Your custom options
});


import {animation} from "./modules/animation.js";
import {dome} from "./modules/dome.js";
import {figure} from "./modules/figure.js";
import {slider} from "./modules/swiper.js"




async function start() {
	await animation();
    await Promise.all([
        new Promise((resolve) => {
            dome();
            resolve();
        }),
        new Promise((resolve) => {
            figure();
            resolve();
        }),
        new Promise((resolve) => {
            slider();
            resolve();
        })
    ]);
}

start();