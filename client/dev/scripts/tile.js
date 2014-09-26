function Tile(number, size, hidden){
  this._tileSize = size;
  this._number = number;
  this._hidden = hidden;
  this._filled = !hidden;

  this.element = $('<div/>').addClass('tile').height(this._tileSize).width(this._tileSize);

  this.init();
}

Tile.prototype.init = function(){
  var fontSize = this._tileSize * 0.7;
  var borderRadius = this._tileSize / 4;
  
  /** Hidden tiles get input elements, others just get text */
  var text;
  if(this._hidden){
    text = $('<input/>').addClass('tileInput').attr('maxlength', 1).width('90%');
    text.change(this.check.bind(this));
  }else{
    text = $('<span/>').text(this._number);
  }
  text.addClass('tileText').css({'font-size': fontSize, 'border-radius': borderRadius});

  this.element.append(text);
};

/** Checks whether a number is entered */
Tile.prototype.check = function(){
  if(this._hidden){
    var inputElement = this.element.find('input').first();
    if(inputElement.val() === ''){
      this._filled = false;
    }else if(inputElement.val().match(/[^0-9]/)){
      inputElement.val('');
      this._filled = false;
    }else{
      this._filled = true;
    }
  }
};

/** Validates and adds corresponding style */
Tile.prototype.evaluate = function(){
  if(this._hidden){
    var inputElement = this.element.find('input').first();
    if(this.isCorrect()){
      inputElement.removeClass('incorrect').addClass('correct');
    }else{
      inputElement.removeClass('correct').addClass('incorrect');
    }
  }
};

/** Removes validation style */
Tile.prototype.reset = function(){
  if(this._hidden){
    var inputElement = this.element.find('input').first();
    inputElement.removeClass('correct').removeClass('incorrect');
  }
};

/** Manually erases input */
Tile.prototype.clear = function(){
  if(this._hidden){
    var inputElement = this.element.find('input').first();
    inputElement.val('');
    this._filled = false;
  }
};

Tile.prototype.isCorrect = function(){
  if(this._hidden){
    var inputElement = this.element.find('input').first();
    return inputElement.val() === this._number.toString();
  }else{
    return true;
  }
};

Tile.prototype.isFilled = function(){
  return this._filled;
};
