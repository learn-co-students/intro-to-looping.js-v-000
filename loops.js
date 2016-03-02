'use strict';

function loopExcitement(){
  var sentences = [];
  for (var i = 51; i <= 75; i++){
    sentences.push("i am looping"); 
  }
  return sentences;
}

function loopingFun(){
  var i = 10;
  var num = null;
  while (i < 17){
    num = i;
    i++;
  }
  return num;
}

function alwaysLooping(parameter){
  var love = [];
  do{
    love.push("JavaScript");
    parameter++;
  } while(parameter < 10);
  return love;
}
