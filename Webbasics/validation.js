function myValidation() {
	let myValue = document.getElementById('myform').value;
	// let myValue = document.querySelector('#myform').value;
	if(isNaN(myValue) || myValue<1 || myValue>20){
		console.log('Not a Valid input');
	}else{
		console.log('this input is ok');
	}
}

//form validation

document.querySelector('.myform').addEventListener('submit',(event) =>{
	event.preventDefault();
	console.log(event.target.username.value);
	console.log(event.target.realname.value);
	event.target.username.value = '';
	event.target.realname.value = '';
})