/****
 * 
 * ES6 中的模版字符串和标签模版 以及正则表达式
 * 
 * 
 */


//  正确返回字符串长度的函数  
function codePointLength (text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

let str1 = 'hello';
console.log(codePointLength(str1)); // 5
let str2 = "你好";
console.log(codePointLength(str2)); // 2  

// 计算一个数的立方根  
Math.cbrt = Math.cbrt || function(x) {
  var y = Math.pow(Math.abs(x), 1/3);
  return x < 0 ? -y : y;
}