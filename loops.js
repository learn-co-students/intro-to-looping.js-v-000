'use strict';

function loopExcitement() {
  var sentences = [];
  for (var i = 50; i < 75; i ++) {
    sentences.push("i am looping");
  }

  return sentences;
}


function loopingFun() {
  var i = 10;
  var num;

  while(i < 17){
    num = i;
    i ++;
  }

  return num;
}

function alwaysLooping(n) {
  var love = [];
  do {
    love.push("JavaScript");
    n += 1;
  } while (n < 10);

  return love;
}
