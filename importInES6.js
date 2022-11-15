// import {print as pr,inc as increment } from './exportInES6.js';
// // named imports , name changed at import usin 'as'
// increment();
// pr();


// we can import everything with *
import * as all from './exportInES6.js'
all.inc();
console.log(all);

import abc from './exportInES6.js'
//this will import the default function from exportInES6.js
console.log(abc);
