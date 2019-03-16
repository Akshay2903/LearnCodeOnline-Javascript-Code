const convertToRs = (dollor) => {
	if(typeof dollor==='number'){
		return dollor * 64
	}else{
		throw Error('Amount needs to be in number')
	}
}

try{
    const myValue = convertToRs('five')
    console.log(myValue);
}catch(error){
   console.log(error);
}

console.log('I will not run if program cashess')