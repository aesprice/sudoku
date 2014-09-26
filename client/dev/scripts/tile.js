function Tile(number, size, hidden){
  this.tileSize = size;
  this.number = number;
  this.hidden = hidden;
  this.element = $('<div/>').addClass('tile').height(this.tileSize).width(this.tileSize);

  this.init();
}

Tile.prototype.init = function(){
  var fontSize = this.tileSize * 0.7;
  
  var text;
  if(this.hidden){
    text = $('<input/>').addClass('tileInput').attr('maxlength', 1).width('100%');
  }else{
    text = $('<span/>').text(this.number);
  }
  text.addClass('tileText').css('font-size', fontSize);

  this.element.append(text);
};

Tile.prototype.isCorrect = function(){
  // return this.correct;
};
