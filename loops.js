'use strict';
function loopExcitement(){
  var array = []
  for(var i=0; i < 25; i++){
    array.push("i am looping")
  }
  return array;
}

function loopingFun(){
  var i = 10;
  var num;
  while(i < 17){
    num = i;
    i++;
  }
  return num;
}

function alwaysLooping(number){
  var love = [];
  var i = 0;
  do {
    love.push("JavaScript");
    i++;
  } while(i < number && number < 10);
  return love;
}