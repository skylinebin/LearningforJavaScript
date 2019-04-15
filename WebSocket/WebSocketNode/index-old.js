const http = require('http');
const path = require('path');
const express = require('express');
const websocket = require('websocket');
const websocketServer = require('websocket').server;

// 定义监听的服务器端口
const serverPort = 8899;

var app = express();

// 配置 express 服务器的基本配置
app.configure(function(){
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', __dirname);
})

// 默认请求下的一些返回操作
app.get('/', function (req, res) {
  res.render('index', {
    layout: false
  });
});

app.listen(serverPort);

// 开始定义 WebSocket Server 
var wsServer = new websocketServer({
  httpServer: app,
  fragmentOutgoingMessages: false
});

var connections = [];
// 定义连接池
var canvasCommands = [];

wsServer.on('request', function (request) {
  var connection = request.accept('whiteboard-example', request.origin);
  connections.push(connection);

  console.log(connection.remoteAddress + " connected - Protocol Version " + connection.webSocketVersion);

  // Send all the existing canvas commands to the new client
  connection.sendUTF(JSON.stringify({
    msg: "initCommands",
    data: canvasCommands
  }));

  // Handle closed connections
  connection.on('close', function () {
    console.log(connection.remoteAddress + " disconnected");

    var index = connections.indexOf(connection);
    if (index !== -1) {
      // remove the connection from the pool
      connections.splice(index, 1);
    }
  });

  // Handle incoming messages
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      try {
        var command = JSON.parse(message.utf8Data);

        if (command.msg === 'clear') {
          canvasCommands = [];
        } else {
          canvasCommands.push(command);
        }

        // rebroadcast command to all clients
        connections.forEach(function (destination) {
          destination.sendUTF(message.utf8Data);
        });
      } catch (e) {
        // do nothing if there's an error.
      }
    }
  });


});
