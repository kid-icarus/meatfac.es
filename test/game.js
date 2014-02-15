var Game = require('../app/game'),
    should = require('chai').should(),
    io = require('socket.io').listen(3000, {log: false})

describe('Game', function() {
  before(function(done){
    this.game = new Game()
    // ToDo, what is done()? lol
    done()
  })
  it('Has an array of players', function(){
    this.game.players.should.exist
    this.game.players.should.be.an('array')
  })
  it('Starts after four players connect', function() {
  })
  it('Contains a random smiley', function() {
  })
});
