function Board(solution){
  this.solution = solution;
  this.tiles = [[],[],[],[],[],[],[],[],[]];
  this.element = $('<div/>').addClass('board');

  this.init();
}

Board.prototype.init = function(){
  for(var y = 0; y < this.solution.length; y++){
    for(var x = 0; x < this.solution[0].length; x++){
      var tile = new Tile(this.solution[y][x]);
      this.tiles[y].push(tile);
      this.element.append(tile.element);
    }
  }
};

$(document).ready(function(){
  var sampleBoard = [
    [1,3,6,2,5,9,7,4,8],
    [7,2,5,4,1,8,9,3,6],
    [4,8,9,3,6,7,1,5,2],
    [3,6,4,7,8,5,2,1,9],
    [5,1,8,6,9,2,3,7,4],
    [9,7,2,1,3,4,6,8,5],
    [2,4,1,5,7,6,8,9,3],
    [8,5,3,9,2,1,4,6,7],
    [6,9,7,8,4,3,5,2,1]
  ];

  var board = new Board(sampleBoard);
  $('body').append(board.element);
});

function Tile(number){
  this.number = number;
  this.correct = true;
  this.element = $('<div/>').addClass('tile').text(number);
}

Tile.prototype.isCorrect = function(){
  return this.correct;
};
