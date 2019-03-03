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
