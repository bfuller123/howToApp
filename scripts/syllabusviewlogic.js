var user = localStorage.getItem("user");

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function pullFromFirebase(user) {
    database.ref().child('users').child(user).on('value', function(snapshot) {
        var userCourses = snapshot.val().courses;

        for (var i in userCourses) {
            var newDiv = $('<div class="tile is-parent is-vertical">');
            var newArticle = $('<article class="tile is-child notification is-warning">');

            newArticle.append('<p class=title>' + userCourses[i].name + ' Course Schedule');

            var SlickOuterDiv = $('<div class="slick-outer-div">');

            for (var j = 0; j < userCourses[i].days.length; j++) {
                SlickOuterDiv.append('<div>' + userCourses[i].days[j] + '</div>');
            }

            newArticle.append(SlickOuterDiv);

            newDiv.append(newArticle);
            $("#course-schedule-goes-here").append(newDiv);







            // console.log(`userCourses.${i} = ${userCourses[i]}`);
            // console.log(userCourses[i].bookPages);

            // var capitalizedBookTitle = toTitleCase(userCourses[i].bookTitle);

            // var newDiv = $('<div class="course-data-div">')
            // var pagesPerDay = Math.floor((userCourses[i].bookPages) / (userCourses[i].totalDays));

            // newDiv.append('<h4>' + userCourses[i].name + '</h4>');
            // newDiv.append('<p> Read ' + pagesPerDay + ' pages per day of <span class="underline">' + capitalizedBookTitle + '</span> every ' + userCourses[i].days + ' for the next ' + userCourses[i].weeks + ' weeks.')
            // newDiv.append('<h5>Your task list:</h5>');
            // // newDiv.append('<h6>')

            // $("#your-courses").append(newDiv);
        }
    })
};

pullFromFirebase(user);
