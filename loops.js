'use strict';

//for (var i = 1; i < 100; i++) {
//  console.log("Hello Word the " + i + " time");
//}

function loopExcitement() {
  var sentences = [];
  for (var i = 50; i < 75; i++) {
    sentences.push("i am looping");
  }
  return sentences;
}

//var age = 13;
//while (age < 16) {
//  console.log("You can't have my car keys - you're too young!");
//  age++;
//}

function loopingFun() {
  var i = 10;
  var num;
  while (i < 17) {
    num = i;
    i++;
  }
  return num;
}

//var i = 0
//do {
//  i += 1;
//  console.log(i);
//} while (i < 5);

function alwaysLooping(num) {
  var love = [];
  do {
    love.push("JavaScript")
    num++
  } while (num < 10);
  return love;
}
