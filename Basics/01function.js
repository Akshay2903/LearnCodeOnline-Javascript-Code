// let sayHello = function (name) {
// 	console.log("Greeting message for user");
// 	console.log(`Hey ${name}`);

// }
// sayHello("john")

let fullNameMaker = function(firstNmae,lastName){
	console.log('Welcome to LCO')
	console.log(`Happy to have you, ${firstNmae} ${lastName}`);
}

fullNameMaker("Akshay","Pal")

let myAdder = function(num1,num2){
	let added = num1 + num2
	return added
}

console.log(myAdder(2,3))

let myMultiplier = function(num2,num1){
	return num1*num2
}
console.log(myMultiplier(9,4))

let guestUser = function(name = 'unName',courseCount = 0){
	return "Hello " + name +" and your course count is: " + courseCount
}

console.log(guestUser("Akshay",3))