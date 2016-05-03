'use strict';

function loopExcitement() {
  var sentences = [];

  for (var i = 50; i < 75; i++) {
    sentences.push("i am looping");
  }
  return sentences
};

function loopingFun() {
  var i = 10 ;
  var num = "" ;

  while ( i < 17) {
    num = i ++
  };

  return num ;
}

function alwaysLooping(numero) {
  var love = [] ;

  do {
   numero += 1;
   love.push("JavaScript");
  } while (numero < 10);

  return love
}