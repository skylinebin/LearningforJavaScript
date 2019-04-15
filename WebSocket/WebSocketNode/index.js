const http = require('http');
const path = require('path');
const express = require('express');
const websocketServer = require('ws').Server;

const serverPort = 8899;

const wsServer = new websocketServer({port: serverPort});

const maxNum = 100;

wsServer.on('connection', function (ws) {

  var sendRandomData = function (ws) {
    if (ws.readyState == 1) {
      var socketsObj = {};
      socketsObj['index'] = Math.floor(Math.random() * Math.floor(maxNum));
      var newDate = new Date();
      socketsObj['date'] = newDate.toLocaleTimeString();

      ws.send(JSON.stringify(socketsObj));
      console.log('update: ', JSON.stringify(socketsObj));
    }
  }

  var updateDateInterval = setInterval(function(){
    sendRandomData(ws);
  },1000)


  ws.on('message',function(message){
    var msgdatas = JSON.parse(message);
    console.log('message comes here: ', msgdatas);
    sendRandomData(ws);
  });

  ws.on('close', function(){
    if (typeof updateDateInterval !== 'undefined') {
      clearInterval(updateDateInterval);
    }
  })

})
