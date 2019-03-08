/* //  Animal  
function Animal() {
  this.eat = function () {
    console.log('animal eat');
  }
}

function Dog() {
  this.bark = function () {
    console.log('dog bark');
  }
}

Dog.prototype = new Animal();

var husky = new Dog(); */

// 封装一个 DOM 查询的例子  

function Elem(id) {
  this.elem = document.getElementById(id)[0];
}

Elem.prototype.html = function (val) {
  var elem = this.elem;
  if (val) {
    elem.innerHTML = val;
    return this; // 链式操作
  } else {
    return elem.innerHTML;
  }
}

Elem.prototype.on = function (type, fn) {
  var elwm = this.elem;
  elem.addEventListener(type, fn);
  return this;
}

var div1 = new Elem('est_en');


div1.html('<p>hello biying</p>').on('click', function() {
  console.log('clicked');
}).html('<p>JavaScript</p>');

// console.log(div1.html());

// div1.html('<p>hello biying</p>')
// div1.on('click', function() {
//   console.log('clicked');
// })