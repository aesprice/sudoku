function Tile(number){
  this.number = number;
  this.correct = true;
  this.element = $('<div/>').addClass('tile').text(number);
}

Tile.prototype.isCorrect = function(){
  return this.correct;
};
