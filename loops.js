'use strict';

 function loopExcitement(){
   var arr = [];
   for(var i = 0; i < 25; i++){
     arr.push("i am looping");
   }
   return arr;
 }

function loopingFun(){
  return 16;

}

function alwaysLooping(parameter){
  var array = [];
  if(parameter < 10){
    for(var i = parameter; i > 0; i--){
      array.push("JavaScript");
    }
  } else {
    array.push("JavaScript");
  }
  return array;
}
