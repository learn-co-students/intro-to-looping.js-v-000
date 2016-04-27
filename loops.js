'use strict';
function loopExcitement() {
    var sentence = [];
    for (var i = 0; i < 25 ; i++) {
        sentence.push("i am looping");
    }
    return sentence;
}

function loopingFun() {
    var i = 10;
    var num;
    while (i < 17 ){
        num = i;
        i++;
    }
    return num;
}

function alwaysLooping(number) {
    var love = [];
    do {
        love.push("JavaScript");
        number ++;
    } while (number < 10);
    return love;
}