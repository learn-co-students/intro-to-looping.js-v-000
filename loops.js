'use strict';

function loopExcitement() {
	var sentence = [];
	for (var i = 0; i < 25; i++) {
		sentence.push("i am looping");
	}
	return sentence;
}

function loopingFun() {
	var i = 10;
	while (i < 17) {
		var num = i++
	}
	return num;
}

function alwaysLooping(num) {
	var love = []
	do {
		love.push("JavaScript");
		num += 1;
	} while (num < 10);

	return love;
}