'use strict';

function loopExcitement() {
  var my_array = [];
  for (var i = 0; i < 25; i++) {
    my_array.push("i am looping");
  }; 
  return my_array;  
};

function loopingFun() {
  var i = 0;
  do {
  i += 1;
  } while (i < 16);
  return i;
}

function alwaysLooping(num) {
   var my_array = [];
   var counter = 0;
   while (counter < num) {
     counter += 1;
     my_array.push("JavaScript");
     if (num > 10){
       return my_array;
     }
   }
   return my_array;
}
