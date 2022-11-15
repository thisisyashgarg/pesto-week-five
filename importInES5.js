// Synchronnous in nature
console.log('a');
const fs = require('fs');
console.log('b');
console.log(fs.readFile);


//
const all = require('./exportInES5.js');
all.inc();
all.print();
