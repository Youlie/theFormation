//Les types

const array = [];
const object = {};
const string = '';
const number = 30;

///ES5



function Person(name, age) {
	this.name = name;
	this.age = age;
}

const julie = new Person('Julie', 29);

console.log(julie);


///ES6 
class Person1 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
} 

const julie1 = new Person1('julie', 29);

console.log(julie1);

