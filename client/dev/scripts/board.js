function Board(solution, maxSize){
  /** Determine board size based on the dimensions of the available screen space */
  this._boardSize = maxSize;

  this._complete = false;
  this._tiles = [[],[],[],[],[],[],[],[],[]];
  
  this.element = $('<div/>').addClass('board').height(this._boardSize).width(this._boardSize);

  this.init(solution);
}

Board.prototype.init = function(solution){
  this.element.empty();
  this._complete = false;
  this._tiles = [[],[],[],[],[],[],[],[],[]];

  var tileSize = this._boardSize/9;
  
  /** Create a tile for each item in our solution matrix */
  for(var y = 0; y < solution.length; y++){
    var row = $('<div/>').addClass('row');
    this.element.append(row);
    for(var x = 0; x < solution[0].length; x++){
      var hidden = Math.floor(Math.random() * 2) ? true : false;
      var tile = new Tile(solution[y][x], tileSize, hidden);
      this._tiles[y].push(tile);
      row.append(tile.element);
    }
  }

  this.element.change(this.update.bind(this));
};

/** (Re-)Renders the board's results if completed */
Board.prototype.update = function(){
  if(this._complete){
    this.checkCompletion();
    if(!this._complete){
      this.hideResults();
    }else{
      this.showResults();
    }
  }else{
    this.checkCompletion();
    if(this._complete){
      this.showResults();
    }
  }
};

/** Checks to see if any tiles are still empty */
Board.prototype.checkCompletion = function(){
  for(var y = 0; y < this._tiles.length; y++){
    for(var x = 0; x < this._tiles[y].length; x++){
      if(!this._tiles[y][x].isFilled()){
        this._complete = false;
        return;
      }
    }
  }
  this._complete = true;
};

/** Shows whether all input tiles are correct */
Board.prototype.showResults = function(){
  for(var y = 0; y < this._tiles.length; y++){
    for(var x = 0; x < this._tiles[y].length; x++){
      this._tiles[y][x].evaluate();
    }
  }
};

Board.prototype.hideResults = function(){
  for(var y = 0; y < this._tiles.length; y++){
    for(var x = 0; x < this._tiles[y].length; x++){
      this._tiles[y][x].reset();
    }
  }
};
