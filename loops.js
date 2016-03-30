'use strict';

function loopExcitement() {
  var sentences = [];
  for (var x = 50; x < 75; x++) {
    sentences.push("i am looping");
  }
  return sentences;
}

function loopingFun() {
  var i = 10; 
  var num; 
  while (i < 17) {
    num = i; 
    i++;
  }
  return num;
}

function alwaysLooping(number) {
  var love = [];
  do {
    love.push("JavaScript");
    number++;
  } while (number < 10);
  return love;
}