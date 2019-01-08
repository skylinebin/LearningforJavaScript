// HTTP 模块支持 Express
const http = require('http');
// 引用 express 来支持 HTTP Server 的实现
const express = require('express');

const path = require('path');

// 引入配置文件
const config = require('./config');



// const MongoClient = require('mongodb').MongoClient;

// const mogourl = `mongodb://${config.mongoUser}:${config.mongoPass}@${config.mongoHost}:${config.mongoPort}/${config.mongoDb}`;

// 创建一个 express 实例
const app = express();



app.use('/hello', (request, response, next) => {
    response.write("hello from server!");
    response.end();

});

// 设置静态资源文件访问
app.use(express.static(path.join(__dirname, 'public')))



// 创建 HTTP Server 而不是直接使用 express 监听
const server = http.createServer(app);



// 监听端口，等待连接
// 启动 HTTP 服务
server.listen(config.serverPort);

// 输出服务器启动日志
console.log(`Server listening at http://127.0.0.1:${config.serverPort}`);