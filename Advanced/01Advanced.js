// const sayHello = function (name){
// 	return "Hey there, " + name + "!"
// }

// console.log(sayHello('sammy'))

const sayHello = (name) => `hey there ${name} !`


console.log(sayHello('sammy'))

const todos = [{
	title: 'Buy Bread',
	isDone: true,

},{
	title: 'Go to Gym',
	isDone: true,
},{
	title: 'Record youtube videos',
	isDone: false,
}]

// const thingsDone = todos.filter((todo) => {
// 	return todo.isDone === true
// })

const thingsDone = todos.filter((todo) => todo.isDone === true)

// console.log(thingsDone)

const cameras = {
	price:600,
	weight:2000,
	myDes: () =>{
		return `This canon camera is of ${this.price}$`
	}
}

console.log(cameras.myDes());


// this is only for redux people
// const func = () => ({key: 'value'});
