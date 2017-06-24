var user = localStorage.getItem("user");

// firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//             user = firebase.auth().currentUser.uid;
//         } else {
//             user = null;
//         }
//     });


function pullFromFirebase(user) {
    database.ref().child('users').child(user).on('value', function(snapshot) {
        var userCourses = snapshot.val().courses;

        // userCourses .0
        // userCourses[0]
        // userCourses['0']

        // for (var i = 0; i < userCourses.length; i++) {

        // }

        // for (var prop in userCourses) {
        //     console.log(`userCourses.${prop} = ${userCourses[prop]}`);
        // }

        // $("#your-courses").append(userCourses[0].articleOneTitle);

        console.log(userCourses[0]);

        // console.log(snapshot.val().courses);
    })
};

pullFromFirebase(user);


// var courses = "";

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
