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
