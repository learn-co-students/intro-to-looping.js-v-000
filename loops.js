'use strict';

function loopExcitement() {
  var sentences = [];
  
  for (var i = 0; i < 25; i++) {
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
    number--;
  } while (0 < number && number <= 10);

  return love;
}