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
})
$(".modal-background").on("click", function() {
    $(".modal").removeClass("is-active");
})

$("#loginButton").on("click", function() {
    $(".login").addClass("is-active");
})

//Grab user input Sign Up

$(".signUpSubmit").on("click", function(event) {
    event.preventDefault();
    name = $(".nameInput").val().trim();
    loginEmail = $(".emailInput").val().trim();
    loginPassword = $(".passwordInput").val().trim();

    database.ref().push({
        name: name,
        loginEmail: loginEmail,
        loginPassword: loginPassword
    });
    window.location.href = "altPages/home.html";

})







//On click to grab course which was clicked
$(".card").on("click", function() {
    localStorage.setItem("keyword", $(this).data("keyword"));
});
