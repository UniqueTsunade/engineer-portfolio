// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

import {loader} from "./modules/loader.js"
import {dome} from "./modules/dome-copy.js";
import {figure} from "./modules/figure-copy.js";
import {slider} from "./modules/swiper.js"

// loader();
dome();
figure();
slider();