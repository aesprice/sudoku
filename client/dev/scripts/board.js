function Board(solution){
  /** Determine board size based on the dimensions of the available screen space */
  if(window.innerHeight <= window.innerWidth){
    this.boardSize = window.innerHeight * 0.9;
  }else{
    this.boardSize = window.innerWidth * 0.9;
  }

  this.solution = solution;
  this.tiles = [[],[],[],[],[],[],[],[],[]];
  this.element = $('<div/>').addClass('board').height(this.boardSize).width(this.boardSize);

  this.init();
}

Board.prototype.init = function(){
  var tileSize = this.boardSize/9;
  
  /** Create 9 rows, with 9 tiles in each row */
  for(var y = 0; y < this.solution.length; y++){
    var row = $('<div/>').addClass('row');
    this.element.append(row);
    
    for(var x = 0; x < this.solution[0].length; x++){
      var hidden = Math.floor(Math.random() * 2) ? true : false;
      var tile = new Tile(this.solution[y][x], tileSize, hidden);

      this.tiles[y].push(tile);
      row.append(tile.element);
    }
  }

  this.element.change(function(){
    if(this.isComplete()){
      this.showResults();
    }
  }.bind(this));
};

Board.prototype.isComplete = function(){
  for(var y = 0; y < this.tiles.length; y++){
    for(var x = 0; x < this.tiles[y].length; x++){
      if(!this.tiles[y][x].isFilled()){
        return false;
      }
    }
  }
  return true;
};

Board.prototype.showResults = function(){
  for(var y = 0; y < this.tiles.length; y++){
    for(var x = 0; x < this.tiles[y].length; x++){
      this.tiles[y][x].evaluate();
    }
  }
};
