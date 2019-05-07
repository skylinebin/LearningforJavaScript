/*****
 * 
 * 用于存储常用的 Promise 实例
 * 
 * 
 */

// 加载图片
const preloadImage = function (path) {
  return new Promise(function (resolve, reject){
    var image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  })
}


// Generator 函数 与 Promise 的结合
function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

var g = function* (){
  try {
    var foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
  var it = generator();

  function go(result) {
    if (result.done) {
      return result.value;
    }
    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }

  go(it.next());
}

run(g);



// 封装方法 使其可以自动区分 同步函数还是异步函数
const f = () => console.log('now');
(async () => f() )()
  .then()
  .catch();

// 第二种写法
(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');
// now
// next


