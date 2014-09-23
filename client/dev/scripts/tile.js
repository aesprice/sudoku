function Tile(number, size){
  var tileSize = size;
  this.number = number;
  this.correct = true;
  this.element = $('<div/>').addClass('tile').height(tileSize).width(tileSize).text(number);
}

Tile.prototype.isCorrect = function(){
  return this.correct;
};
