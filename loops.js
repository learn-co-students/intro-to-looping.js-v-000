'use strict';

function loopExcitement() {
  var sentences = new Array()
  for ( var i = 50 ; i < 75 ; i++ ) {
    sentences.push("i am looping");
  }
  return sentences;
}

function loopingFun() {
  var i = 10;
  var num;
  while ( i < 17 ) {
    num = i++;
  }
  return num;
}

function alwaysLooping(number) {
  var love = new Array();
  do{
    love.push("JavaScript");
    ++number;
  } while ( number < 10 )
  return love;
}