'use strict';

function loopExcitement(){
  var sentences = [];
  for (var i = 50; i < 75; i++){
    sentences.push("i am looping");
  };
  return sentences;
};

function loopingFun(){
  var i = 10;
  while (i < 17){
    var num = i;
    i++;
  };
  return num;
};

function alwaysLooping(num){
  var love = [];
  do {
    num++;
    love.push("JavaScript");
  } while (num < 10);
  return love;
};
