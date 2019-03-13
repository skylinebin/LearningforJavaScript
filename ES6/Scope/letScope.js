// var tmp = new Date();

// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = 'hello world';
//   }
// }

// f(); // undefined

// function f() {
//   console.log('This is outside.');
// }

// (function (){
//   if (false) {
//     function f() {
//       console.log('This is inside.');
//     }
//   }
//   f();
// }())

// 彻底冻结一个对象  
// var constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach((key, i) => {
//     if (typeof obj[key] === 'object') {
//       constantize(obj[key]);
//     }
//   });
// };

// var a =1;
// console.log(global.a);

// 获取 JavaScript 环境的顶层对象
(typeof window !== 'undefined' ? window : (typeof process === 'object' && typeof require === 'function' && typeof global === 'object')? global : this);

var getGlobal = function () {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
};