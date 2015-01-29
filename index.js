var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, {'transports': ['websocket', 'polling']});

module.exports= function(instanceConfig, projectConfig) {

    io.on('connection', function(socket){
      socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
    });
    
    http.listen(8080, function(){
      console.log('listening on 8080');
    });

    return {server:http};
};
