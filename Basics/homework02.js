const status = [{
	title: 'homework',
	isDone: false,
},{
	title: 'go to Gym',
	isDone: false,
},{
	title: 'Programming',
	isDone: true,
},{
	title: 'go to shop',
    isDone: true,
},{
	title: 'dinner',
	isDone: true,
},{
	title: 'exam',
	isDone: false,
}]

const printTitle = status.filter((todo) => todo.isDone === false)

printTitle.forEach(todo => console.log(todo.title));