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
    monday = $("[name='mondayCheckbox']"),
    tuesday = $("[name='tuesdayCheckbox']"),
    wednesday = $("[name='wednesdayCheckbox']"),
    thursday = $("[name='thursdayCheckbox']"),
    friday = $("[name='fridayCheckbox']"),
    saturday = $("[name='saturdayCheckbox']"),
    sunday = $("[name='sundayCheckbox']")
];
var chosenDayArray = [];
var weeks = "";
var courseName = "";
var days = "";


//Truncate string function for books and newsapi
function truncateString(str, num) {
    if (num > str.length) {
        return str;
    } else {
        str = str.substring(0, num);
        return str + "...";
    }
}

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
            var user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: name
            }).then(function() {
                alert("Thank you for logging in " + name "!");
            }, function(error) {
                alert("There has been an error");
            });
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

var user = firebase.auth().currentUser;

if (user) {
    // User is signed in.
} else {
    // No user is signed in.
}




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

    weeks = $("#amountOfHours").val();
    courseName = localStorage.getItem("keyword");

    for (var i = 0; i < dayArray.length; i++) {
        for (var j = 0; j < dayArray[i].length; j++) {

            if (dayArray[i][j].checked) {

                chosenDayArray.push(dayArray[i]);
                // localStorage.setItem(dayArray[i], JSON.parse(chosenDayArray));
            };
        };
    }

    days = "lame";

    database.ref().push({
        courseName: courseName,
        weeks: weeks,
        days: days
    });
});
