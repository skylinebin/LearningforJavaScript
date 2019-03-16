/****
 * 
 * ES6 中的解构赋值
 * 
 */

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

let [,,third] = ["foo","bar","baz"];
console.log(third); // baz

let [head, ...tail] = [1,2,3,4,5,6];
console.log(head); // 1
console.log(tail); // [ 2, 3, 4, 5, 6 ]

let [a, [b], d] = [1,[2,3],4];
console.log(a); // 1
console.log(b); // 2
console.log(d); // 4

let {fooo:fooo, barr:barr} = {fooo: "aaaa", barr: "bbbb"};
// let {fooo, barr} = {fooo: "aaaa", barr: "bbbb"}; // 简写形式
console.log(fooo); // aaaa
console.log(barr); // bbbb

let {fooz:barz} = {fooz: "aaaayahu", barr: "bbbb"};
console.log(barz); // aaaayahu
// console.log(fooz); // ! fooz is not defined