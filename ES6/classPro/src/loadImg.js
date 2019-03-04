/***
 * 
 * load Image
 * 
 */

// function loadImg(src, callback, fail) {
//   var img = document.createElement('img');
//   img.onload = function () {
//     console.log(123, img);
//     callback(img);
//   }
//   img.onerror = function () {
//     fail();
//   }
//   img.src = src;
// }

// var src = 'https://www.imooc.com/static/img/index/logo.png';
// loadImg(src, function (img) {
//   console.log(img.width);
// }, function () {
//   console.log('failed');
// })

function loadImg (src) {
  var promise = new Promise(function(resolve, reject){
    var img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    }
    img.onerror = function () {
      reject();
    }
    img.src = src;
  })
  return promise;
}

var src = 'https://www.imooc.com/static/img/index/logo.png';
var result = loadImg(src);

result.then(function(img){
  console.log(img.width);
}, function(){
  console.log('load failed');
})

result.then(function(img){
  console.log(img.height);
})