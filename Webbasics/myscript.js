// console.log(document.title);

// document.title = 'I got changed';

// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));


// const myElement = document.querySelectorAll('.classone');

// console.log(myElement[0]);

// const myPElements = document.querySelector('p');
// myPElements.textContent = 'I am being changed using JS'

const myPElements = document.querySelectorAll('p');
myPElements.forEach(function (p) {
	p.textContent = 'I am changed using JS loop'
	// p.remove()
})
// myPElements.forEach((p) => {
// 	p.textContent = 'I am changed using JS loop'
// })


const myNewPara = document.createElement('p')

myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event) =>{
	event.target.textContent = "I was clicked"

})

//track input form

document.querySelector('#myform').addEventListener('change', () => {
	console.log(event.target.value);
})
