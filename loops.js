'use strict';

function loopExcitement() {
  var i,
      arr = [];
  for (i = 0; i < 25; i++) {
    arr.push("i am looping");
  }
  return arr;
}

function loopingFun() {
  var num,
      i = 10;
  while (i <= 16) {
    num = i;
    i++;
  }
  return num;
}

function alwaysLooping(i) {
  var i,
      arr = [];
  do {
    arr.push("JavaScript");
    i++;
  } while (i < 10);
  return arr;
}
