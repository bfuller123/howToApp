var config = {
    apiKey: "AIzaSyDp76QEn9bD6nuDv5SP_PvcQvImd_TIlMI",
    authDomain: "howtoapp-1a3e2.firebaseapp.com",
    databaseURL: "https://howtoapp-1a3e2.firebaseio.com",
    projectId: "howtoapp-1a3e2",
    storageBucket: "howtoapp-1a3e2.appspot.com",
    messagingSenderId: "1005485618914"
  };

firebase.initializeApp(config);

var database = firebase.database(),
	course = {
		// day = [];
		// tasks = [];
	};

database.ref().on("child_added", function(childSnapshot) {

    course.day = childSnapshot.val().course.day
    course.tasks = childSnapshot.val().course.tasks

    for (var i = 0; i < days.length; i++) {
    	$("#calendar").append("<div id='calendar-day-view'><p id='day' class='calendar-week-day'>" + day[i] 
    	+ "</p> <hr> <p class='calendar-week-task'>" + task[i] + "<p></div>"),
    },

    $("#calendar").append("<div>Ay yaya</div>"),

}, function(errorObject) {

    console.log("Errors handled: " + errorObject.code);

});

$("#day").on("click", function(event) {

	$("#day-view").append("asgdlsjhdgs")


});