'use strict';

function loopExcitement(){
  var sentences = []
  for (var i = 1; i < 26; i++){
    sentences.push("i am looping");
  }
  return sentences;
}

function alwaysLooping(num){
  var love= []
  do {
    love.push("JavaScript")
    num ++;
  } while (num<10);
  return love
}

function loopingFun(){
  var i = 10;
  var num;
  while (i<17){
    num = i;
    i++;
  }
  return num
}
