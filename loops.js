'use strict';
function loopExcitement(){
  var output = [];
  for (var i=0; i<25; i++){
    output.push("i am looping");
  };
  return output;
};

function loopingFun(){
  for (var i=12; i<16; i++){
  }
  return i;
};

function alwaysLooping(num) {
  if (num<10){
    var ary = new Array(num).fill("JavaScript");
    return ary;
  } else {
    return ["JavaScript"];
  }
};
