// && - AND operator 
// || - OR operator
// ! - NOT operartor

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest =true

if (isVerified && isLoggedIn && hasPaymentToken) {
	console.log('Greeding message to user')
	console.log('grant access to paid course')
}
else if(isVerified || isGuest){
	console.log('Allow free previews')
}
else{
	console.log('MESSAGE: please contact admin')
}
