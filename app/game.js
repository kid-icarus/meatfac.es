var app = require('express')(),
   server = require('http').createServer(app),
   io = require('socket.io').listen(server)

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
});

var Game = function() {
  this.players = [] 
}

Game.prototype.addPlayer = function(player) {
  if (this.players.length >= 4) {
    return false 
  }
  this.players.push(player)
}

Game.prototype.start = function() {

}


module.exports = Game
