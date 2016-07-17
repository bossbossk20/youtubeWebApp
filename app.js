var express = require('express')();
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var youtube = require('./lib/js/youtubeAPI.js');

app.use(express.static('public'))

io.on('connection' , function(socket){
  console.log('a user connected');
})

app.get('/search', youtube.search);

// app.set('port', (process.env.PORT || 3001));

http.listen(3001, function () {
  console.log('Node app is running on port', app.get('port'));
});
