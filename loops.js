'use strict';

function loopExcitement() {
  var sentences = [];
  for (var i = 50; i < 75; i++) {
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
    number ++;
  } while (number < 10);
  return love;
}
