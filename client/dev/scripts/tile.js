function Tile(number, size){
  this.tileSize = size;
  this.number = number;
  this.correct = true;
  this.element = $('<div/>').addClass('tile').height(this.tileSize).width(this.tileSize);

  this.init();
}

Tile.prototype.init = function(){
  var fontSize = this.tileSize * 0.7;
  var text = $('<span/>').addClass('tileText').text(this.number).css('font-size', fontSize);
  
  this.element.append(text);
};

Tile.prototype.isCorrect = function(){
  return this.correct;
};
