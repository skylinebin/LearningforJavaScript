// if (1 == '1') {
//   console.log('1') // 只会输出 1
// }
// if (1 === '1') {
//   console.log('2')
// }
// if ([1] == [1]) {
//   console.log('3')
// }
// if ([1] === [1]) {
//   console.log('4')
// }
// if (0.1 + 0.2 == 0.3) {
//   console.log('5')
// }
// if (0.1 + 0.2 === 0.3) {
//   console.log('6')
// }


// console.log('begin');
// setTimeout(() => {
//   console.log('setTimeout 1');
//   Promise.resolve().then(() => {
//     console.log('promise 1');
//     setTimeout(() => {
//       console.log('setTimeout2');
//     })
//   }).then(() => {
//     console.log('promise 2');
//   });
// }, 0);
// console.log('end');



var maxArea = function(height) {
  var stack = [];
  var max = 0;
  var len = height.length;
  for(let i = 0; i < len; i++){
      while(stack.length != 0 && height[i] > height[stack[stack.length-1]]){
          var j = stack.pop();
          var k = stack.length == 0 ? -1 : stack[stack.length-1];
          var heigher = Math.min(height[i], height[k] || height[j]);
          var maxA = (i - (k == -1 ? 0 : k))*heigher;
          max = Math.max(max, maxA);
         // console.log(j, max);
      }
      stack.push(i);
  }
  //console.log("入栈完成")
  var obj = {};
  var res =[];
  for(let i = 0; i < stack.length; i++){
      var index = stack[i];
      if(!obj[height[index]]){
          obj[height[index]] = index;
          res.push(index);
      }else{
          continue;
      }
  }
 // console.log(res);
  while(res.length != 0){
      var j = res.pop();
      var k = res.length == 0 ? -1 : res[res.length-1];
      var heigher = Math.min(height[j], height[k] || height[j]);
      var maxA = (j - (k == -1 ? 0 : k))*heigher;
      max = Math.max(max, maxA);
     // console.log(j, max);
  }
  return max;
};



var maxArea2 = function(height) {
  var max = 0;
  var len = height.length;
  for(let i = 0; i < len; i++){
    let j=i+1;
      while(j<len){
          var maxA = (height[i]<height[j] ? height[i] : height[j])*(j-i);
          max = Math.max(max, maxA);
          j++;
      }
  }
  return max;
};
console.log(maxArea2([1,8,6,2,5,4,8,3,7]));