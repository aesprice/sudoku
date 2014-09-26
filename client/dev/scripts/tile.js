function Tile(number, size, hidden){
  this.tileSize = size;
  this.number = number;
  this.hidden = hidden;
  this.element = $('<div/>').addClass('tile').height(this.tileSize).width(this.tileSize);

  this.init();
}

Tile.prototype.init = function(){
  var fontSize = this.tileSize * 0.7;
  var borderRadius = this.tileSize / 4;
  
  var text;
  if(this.hidden){
    text = $('<input/>').addClass('tileInput').attr('maxlength', 1).width('90%');
    text.change(this.evaluate.bind(this));
  }else{
    text = $('<span/>').text(this.number);
  }
  text.addClass('tileText').css({'font-size': fontSize, 'border-radius': borderRadius});

  this.element.append(text);
};

Tile.prototype.evaluate = function(){
  var inputElement = this.element.find('input').first();
  if(inputElement.val() === ''){
    inputElement.removeClass('correct').removeClass('incorrect');
  }else if(inputElement.val() === this.number.toString()){
    inputElement.removeClass('incorrect').addClass('correct');
  }else{
    inputElement.removeClass('correct').addClass('incorrect');
  }
};

Tile.prototype.isCorrect = function(){
  // return this.correct;
};
