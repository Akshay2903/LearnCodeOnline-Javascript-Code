// let myArray = ['name',33,true]

let myYoutubeVideoOne = {
	title:'Loops in Javascript',
	videoLength:'15',
	videoDescription:'this is a video description and a long one',
	videoCreator: 'Akshay pal'
};

let myYoutubeVideoTwo = {
	title:'functions in Javascript',
	videoLength:10,
	videoDescription:'this is a video description and a long one',
	videoCreator: 'Akshay pal'
};

// console.log(myYoutubeVideoOne);

// console.log(`Hey new Video on ${myYoutubeVideoOne.title} by ${myYoutubeVideoOne.videoCreator}`);

// myYoutubeVideo.title = 'ForEach loop in JS'

// console.log(myYoutubeVideo);

// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);

let changeVideoLength = function (myObject) {
	// console.log(`Time of this video is: ${myObject.videoLength}`);
	// return `Time of this video is: ${myObject.videoLength + 2}`;
	return{
		formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
		formatTwo: `Time of this video is: ${myObject.videoLength + 1}`
	}
}

let adOne = changeVideoLength(myYoutubeVideoTwo)
console.log(adOne.formatTwo);