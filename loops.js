'use strict';

function loopExcitement() {
  var sentences = [];
  for (var i = 50; i < 75; i++) {
    sentences.push("i am looping");
  }
  return sentences;
}

function loopingFun() {
  var num = 0;
  for (var i = 10; i < 17; i++) {
    num = i;
  }
  return num;
}

function alwaysLooping(number) {
  var love = [];
  do {
    number += 1;
    love.push("JavaScript");
  } while (number < 10);
  return love;
}
