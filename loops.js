'use strict';

function loopExcitement () {
  var sentences = [];
  for (var i = 50; i < 75; i+=1) {sentences.push("i am looping");}
  return sentences;
}

function loopingFun () {
  var i = 10; var num; while (i < 17) {num = i; i+=1}; return num;
}

function alwaysLooping(number) {
  var love = [];
  do {love.push("JavaScript"); number += 1} while (number < 10);
  return love;
  
}
