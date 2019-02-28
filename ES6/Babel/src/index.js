import util1 from './util1.js'
import { fn1, fn2 } from './util2.js'

console.log(util1);
fn1()
fn2()



// [1, 2, 3].map(item => item + 1)

// run in concle
// babel src / index.js

// output: 

// "use strict";

// [1, 2, 3].map(function (item) {
//   return item + 1;
// });
