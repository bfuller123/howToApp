// console.log ("Yo")
// console.log (userCourses);

// function getUserData(user) {
//     database.ref().child('users').child(user).on('value', function(snapshot) {
//         userCourses = snapshot.val().courses;
//         console.log(userCourses);
//     });
// }

// var courses = "";

// database.ref().child('users').child(user).on('value', function(snapshot) {
//     courses = snapshot.val();
//         // userCourses = snapshot.val().courses;
//         // console.log(userCourses);
//     });

// var user = firebase.auth().currentUser.uid;

// getUserData(user)

// database.ref().on("child_added", function(childSnapshot) {

//     name = childSnapshot.val().name
//     station = childSnapshot.val().station
//     time = childSnapshot.val().time
//     rate = childSnapshot.val().rate

//     timeFunction(rate, time);

//     $(".table").append("<tr><td>" + childSnapshot.val().name + "</td>" + "<td>" + childSnapshot.val().station + "</td>" + "<td>" + childSnapshot.val().rate + "</td>" + "<td>" + arrival + "</td>" + "<td>" + minutesAway + "</td></tr>");

// }, function(errorObject) {

//     console.log("Errors handled: " + errorObject.code);

// });

// database.ref().child('users').child(user).on('value', function(snapshot) {})


// function getUserData(user) {
//     database.ref().child('users').child(user).on('value', function(snapshot) {
//         userCourses = snapshot.val().courses;
//         console.log(userCourses);
//     });
// }
