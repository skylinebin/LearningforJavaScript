/*
 * @Author: SkylineBin 
 * @Date: 2019-07-04 21:08:35 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-04 21:20:02
 */


let timeChunk = function(arr, fn, count){
  let obj,temp;
  let len = arr.length;
  let start = function(){
    for (let i = 0; i < Math.min(count || 1, arr.length); i++) {
      obj = arr.shift();
      fn(obj);
    }
  }

  return function(){
    temp = setInterval(function(){
      if(arr.length === 0){
        return clearInterval(temp);
      }
      start();
    },200)
  }
}

let arr = [];
for (let j = 1; j <= 1000; j++) {
  arr.push(j);  
}

let renderFriendList = timeChunk(arr, function(n){
  let div = document.createElement('div');
  div.innerHTML = n;
  document.body.appendChild(div);
},8);

renderFriendList();