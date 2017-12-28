// function statement
function greet (name) {
	console.log('Hello ' + name);
}
// involking the function statement 
greet('Joe');

//using a fucntion expression 
let greetFunc = function(name) {
	console.log('Hello ' + name);
};
greetFunc('Joe');

// using an Immediately Invoked Function Expression(IIFE)

let greeting = function(name) {
	return 'Hello ' + name;
}('John');

console.log(greeting)


var firstName = 'John';

(function(name) {

	var greeting = 'Hello ';
	console.log(greeting + '' + name);

}(firstName)); //IIFE
// End of Immediately Involked Function Expression ***



// Understanding Closures ***

function greet(whatToSay) {

	return function(name){
		console.log(whatToSay + ' ' + name);
	}

}

var sayHi = greet('Hi');
sayHi('Jordan');

// Closures are a feature of the JS programming language 
// the JS engine will always make sure that what ever function
// is running that it will have access to the variables that 
// are needed in the scope chain 





















