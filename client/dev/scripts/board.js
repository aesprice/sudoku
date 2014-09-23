function Board(solution){
  this.boardSize = 270;

  this.solution = solution;
  this.tiles = [[],[],[],[],[],[],[],[],[]];
  this.element = $('<div/>').addClass('board').height(this.boardSize).width(this.boardSize);

  this.init();
}

Board.prototype.init = function(){
  var tileSize = this.boardSize/9;
  
  for(var y = 0; y < this.solution.length; y++){
    var row = $('<div/>').addClass('row');
    this.element.append(row);
    
    for(var x = 0; x < this.solution[0].length; x++){
      var tile = new Tile(this.solution[y][x], tileSize);
      this.tiles[y].push(tile);
      row.append(tile.element);
    }
  }
};
