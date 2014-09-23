function Tile(number, size){
  var tileSize = size;
  var fontSize = size * 0.7;
  
  this.number = number;
  this.correct = true;
  this.element = $('<div/>').addClass('tile').height(tileSize).width(tileSize).text(number).css('font-size', fontSize);
}

Tile.prototype.isCorrect = function(){
  return this.correct;
};
