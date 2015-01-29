var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, {'transports': ['websocket', 'polling']});

module.exports= function(instanceConfig, projectConfig) {

    io.on('connection', function(socket){
      socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
    });
    
    http.listen(5000, function(){
      console.log('Scoket.io listening on port 5000 (which gets mapped to /websocket');
    });

    return {server:http};
};
