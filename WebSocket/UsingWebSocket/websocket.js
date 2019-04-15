/*****
 * 
 * WebSocket 常用方法测试
 * 
 */

var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function () {
  ws.send("some request....");
}

ws.addEventListener('open',function(event){
  ws.send("some request....");
})


ws.addEventListener('close',function(event){
  console.log('connection closed.');
})

ws.onmessage = function (event) {
  var data = event.data;
}

ws.addEventListener('message', function(event){
  var datas = event.data;
})

ws.addEventListener('error', function(event){
  console.log(event);
})


ws.addEventListener('open', function (event) {
  ws.send("some request....");

  var msg = {
    type: 'message',
    date: Date.now()
  }
  ws.send(JSON.stringify(msg));
})