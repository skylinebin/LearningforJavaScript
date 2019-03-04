/****
 * 
 * function prototype link & class extends
 * 
 */

// Animal Constructor
function Animal () {
  this.eat = function () {
    console.log('Animal eat');
  }
}

// Dog Constuctor
function Dog () {
  this.bark = function () {
    console.log('Dog bark');
  }
}

// Binding prototype to extend
Dog.prototype = new Animal();

var husky = new Dog();
husky.bark();
husky.eat();

/* 
// JavaScript 中 匿名函数的this作用域问题
function fn() {
  console.log('real', this); // real {a:100}

  var arr = [1, 2, 3];
  arr.map(function (item) {
    console.log(this); // 这里的 this 打印的是 window 对象
  })
}
fn.call({a:100}); */

