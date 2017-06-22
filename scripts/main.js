//Variables

var config = {
    apiKey: "AIzaSyDp76QEn9bD6nuDv5SP_PvcQvImd_TIlMI",
    authDomain: "howtoapp-1a3e2.firebaseapp.com",
    databaseURL: "https://howtoapp-1a3e2.firebaseio.com",
    projectId: "howtoapp-1a3e2",
    storageBucket: "howtoapp-1a3e2.appspot.com",
    messagingSenderId: "1005485618914"
};

firebase.initializeApp(config);

var database = firebase.database();
var name = "";
var loginEmail = "";
var loginPassword = "";
var loggedIn;

//vars for grabbing course data from resource panel

var dayArray = [
    monday = $("#mondayCheckbox"),
    tuesday = $("#tuesdayCheckbox"),
    wednesday = $("#wednesdayCheckbox"),
    thursday = $("#thursdayCheckbox"),
    friday = $("#fridayCheckbox"),
    saturday = $("#saturdayCheckbox"),
    sunday = $("#sundayCheckbox")
];
var chosenDayArray = [];
var weeks = "";
var courseName = "";
var days = "";
var totalDays = "";
var pagesPerDay = "";


//Truncate string function for books and newsapi
function truncateString(str, num) {
    if (num > str.length) {
        return str;
    } else {
        str = str.substring(0, num);
        return str + "...";
    }
}

//create user for firebase
function createUser(user, username) {
    firebase.database().ref().child('users').child(user).update({
        name: username,
        courses:{
            0: 'Car Maintainence',
            1: 'Home Organization',
            2: 'Cooking',
            3: 'Create a Resume'
        }
    })
};

//Login Buttons
$(".modal-close").on("click", function() {
    $(".modal").removeClass("is-active");
});
$(".modal-background").on("click", function() {
    $(".modal").removeClass("is-active");
});

$("#loginButton").on("click", function() {
    $(".login").addClass("is-active");
});

//Grab user input Sign Up

$(".signUpSubmit").on("click", function(event) {
    event.preventDefault();
    name = $(".nameInput").val().trim();
    loginEmail = $(".emailInput").val();
    loginPassword = $(".passwordInput").val();

    firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // ...
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            createUser(user.uid, name);
            // User is signed in.
            loggedIn = true;
            if (window.location.href == "index.html") {
                window.location.href = "altPages/home.html";
            } else {
                window.location.href = "home.html";
            }

        } else {
            // No user is signed in.
            alert("You are not signed in.")
        }
    });

});

//Login button
//need to add functionality to the login button



//log out button
$("#logOutButton").on("click", function(event) {
    loggedIn = false;
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = "anonymousConsole.html"
    }).catch(function(error) {
        // An error happened.
        alert(error);
    });

});

//On click to grab course which was clicked
$(".card").on("click", function() {
    localStorage.setItem("keyword", $(this).data("keyword"));
});

//On click to grab course data & day data
$("#create-course-link").on("click", function() {

    console.log("Yo yo")

    courseName = localStorage.getItem("keyword");
    weeks = $("#amountOfHours").val();

    for (var i = 0; i < dayArray.length; i++) {
        for (var j = 0; j < dayArray[i].length; j++) {

            if (dayArray[i][j].checked) {

                chosenDayArray.push(dayArray[i].data("name"));
                console.log(chosenDayArray);
            };
        };
    }

    days = chosenDayArray;
    totalDays = (chosenDayArray.length * weeks);

    database.ref().push({
        courseName: courseName,
        weeks: weeks,
        days: chosenDayArray,
        totalDays: totalDays,
    });
});

// console.log(bookOneApi);


