/*
 * @Author: SkylineBin 
 * @Date: 2019-07-05 08:56:43 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-05 09:28:24
 */


// function add(x) {
//   var sum = x;
//   var tmp = function (y) {
//       sum = sum + y;
//       return tmp;
//   };
//   tmp.toString = function () {
//       return sum;
//   };
//   tmp.valueOf = function(){
//     return sum;
//   }

//   return tmp;
// }
// console.log(add(1)(2)(3));  //6
// console.log(add(1)(2)(3)(4));   //10
// console.log(add(1,2));   //10


// let add = function(x,y){
//   if(arguments.length === 1){
//     return function(z){
//       return x+z;
//     }
//   }else{
//     return x+y;
//   }
// }

// console.log(add(2,3));
// console.log(add(2)(3));
// console.log(add(2)(3)(4)(5));

function add(x) {
  var sum = x;
  var tmp = function (y) {
      sum = sum + y;
      return tmp;
  };
  tmp.toString = function () {
      return sum;
  };
  return tmp;
}
console.log(add(1)(2)(3));  //6
console.log(add(1)(2)(3)(4));   //10