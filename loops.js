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
  var output = [];
  do {
    output.push("JavaScript");
    num--;
  }
  while (num > 0 && num < 10);
  return output;
};
