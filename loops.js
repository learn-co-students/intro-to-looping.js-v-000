'use strict';

function loopExcitement(){
	var array=[]
	for (var i=0; i<25; i+=1) { 
		array.push("i am looping"); 
	}
	return array;
}

function loopingFun() {
	var number=16;
	var element=0;
	while (number>element) {element+=1}
	return element;
}

function alwaysLooping(param) {
	var array=[]
	var count=0;
	do {
		array.push('JavaScript');
		count+=1;
	} while (param==5 && count<5)
	return array;
}