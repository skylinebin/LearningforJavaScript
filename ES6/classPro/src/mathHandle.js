/*****
 * 
 * JavaScript 构造函数 以及 Class 的语法
 * 
 * 
 */

function MathHandle (x,y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function () {
  return this.x + this.y;
}

var m = new MathHandle(1, 2);
console.log(m.add());

typeof MathHandle // 'function'
MathHandle.prototype  // 函数的(显式)原型
MathHandle.prototype.constructor === MathHandle // 原型的 constructor 属性 等于 构造函数 MathHandle 本身
m.__proto__ === MathHandle.prototype //true m 是 new 出来的实例 实例的隐式原型 == 构造函数的显式原型



// Class Structure

// class MathHandle2 {
//   constructor (x,y) {
//     this.x = x;
//     this.y = y;
//   }

//   add() {
//     return this.x + this.y;
//   }
// }

// const m2 = new MathHandle2(1, 2);
// console.log(m2.add());