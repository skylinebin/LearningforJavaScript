/****
 * 
 * The function of ES6
 * 
 */

//  let 与 const 

// let i = 10;
// i = 100;
// const j = 20;
// j = 200; // ! SyntaxError: indexEs6.js: "j" is read-only

// var name = 'zhangsan', age = 20, html = '';
// html += '<div>';
// html += '  <p>'+ name +'</p>';
// html += '  <p>'+ age +'</p>';
// html += '</div>';

// -------------------------------------------------------------

// 多行字符串

// const name = 'Nee', age = 20;
// const html = `
//         <div>
//           <p>${name}</p>
//           <p>${age}</p>
//         </div>
//     `;

// -------------------------------------------------------------

// 解构赋值
// ES5
// var obj = {a:100, b:200};
// var a = obj.a;
// var b = obj.b;

// var arr = ['xxx', 'yyy', 'zzz'];
// var x = arr[0];
// var y = arr[2];

// ES6
// const obj = { a: 100, b: 200 };
// const {a, b} = obj;
// const arr = ['xxx', 'yyy', 'zzz'];
// const [x, y, z] = arr;

// -------------------------------------------------------------

// 块级作用域
// var obj = {a:100, b:200};
// for (var item in obj) {
//   console.log(item);
// }
// console.log(item);

// const obj = { a: 100, b: 200 };
// for (let item in obj) {
//   console.log(item);
// }
// console.log(item);
// ES6 中 编译过后 ，第一个 item 与 第二个 item 不是同一回事，名字会不一样

// -------------------------------------------------------------

// 函数默认参数  
// function fn (a, b) {
//   if (b == null) {
//     b = 0;
//   }
// }

// ES6
// function fn (a, b=0) {

// }

// after build
/* function fn(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
} */

// -------------------------------------------------------------

// 箭头函数

// var arr = [1, 2, 3];
// arr.map(function (item) {
//   return item + 1;
// })

// ES6
const arr = [1, 2, 3];
arr.map(item => item + 1);
arr.map((item, index) => {
  console.log(item);
  return item;
})

// after build
/* var arr = [1, 2, 3];
arr.map(function (item) {
  return item + 1;
});
arr.map(function (item, index) {
  console.log(item);
  return item;
}); */

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

/* // 箭头函数可以解决 this 的指代问题
function fn() {
  console.log('real', this); // real {a:100}

  var arr = [1, 2, 3];
  arr.map(item => {
    console.log(this); // {a: 100}
  })
}
fn.call({
  a: 100
}); */