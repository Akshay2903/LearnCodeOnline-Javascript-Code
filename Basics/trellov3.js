let myTodos = {
	day: 'Monday',
	meetings: 0,
	meetDone:0,

	addMeeting: function (num) {
		// console.log('Heyyy, I am a function');
		// console.log(this)
		this.meetings = this.meetings + num
	},
	meetingDone: function(Done){
		this.meetDone = this.meetDone - Done
	},

	reset:function(){
		this.meetings = 0
		this.meetDone = 0
	},
	summary: function(){
		return `You have ${this.meetings + this.meetDone} meetings today! `
	}
};


myTodos.addMeeting(4);
myTodos.addMeeting(8);
myTodos.meetingDone(11);
console.log(myTodos.summary());