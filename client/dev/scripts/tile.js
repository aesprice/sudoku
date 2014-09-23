function Tile(number, size){
  var tileSize = size;
  var fontSize = size * 0.7;
  var text = $('<span/>').addClass('tileText').text(number).css('font-size', fontSize);

  this.number = number;
  this.correct = true;
  this.element = $('<div/>').addClass('tile').height(tileSize).width(tileSize);
  this.element.append(text);
}

Tile.prototype.isCorrect = function(){
  return this.correct;
};
