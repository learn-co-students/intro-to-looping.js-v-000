'use strict';

function loopExcitement() {
  var myArray =[];
  for (var i =1; i<=25; i++) {
    myArray.push("i am looping");
  }
  return myArray;
}

function loopingFun(){
  var i = 10;
  var num=[];
  while (i <16) {
    i++
  }
  num = i;
  return i;
}

function alwaysLooping(num) {
  if (num <= 10) {
    var love=[];
    var i =0;
    do {
      i++;
      love.push("JavaScript")
    } while( i < num);
    return love;
  } else {
    return ["JavaScript"];
  }
}
