$(document).ready(function(){
  var sampleBoard = [
    [1,3,6,2,5,9,7,4,8],
    [7,2,5,4,1,8,9,3,6],
    [4,8,9,3,6,7,1,5,2],
    [3,6,4,7,8,5,2,1,9],
    [5,1,8,6,9,2,3,7,4],
    [9,7,2,1,3,4,6,8,5],
    [2,4,1,5,7,6,8,9,3],
    [8,5,3,9,2,1,4,6,7],
    [6,9,7,8,4,3,5,2,1]
  ];

  var maxSize;
  if(window.innerHeight <= window.innerWidth){
    maxSize = window.innerHeight * 0.8;
  }else{
    maxSize = window.innerWidth * 0.8;
  }

  $('.title').css({'font-size': (maxSize * 0.12), 'margin-bottom': (maxSize * 0.03)});

  var board = new Board(sampleBoard, maxSize);
  $('.boardContainer').append(board.element);
});
