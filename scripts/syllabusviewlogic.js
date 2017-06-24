var user = localStorage.getItem("user");

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function minutesOfReading(pagesPerDay) {
    var rate = (500 / 220);
    return Math.floor(pagesPerDay * rate);
}

function pullFromFirebase(user) {
    database.ref().child('users').child(user).on('value', function(snapshot) {
        var userCourses = snapshot.val().courses;

        for (var i in userCourses) {
            var capitalizedBookTitle = toTitleCase(userCourses[i].bookTitle);
            var capitalizedCourseName = toTitleCase(userCourses[i].name);
            var pagesPerDay = Math.floor((userCourses[i].bookPages) / (userCourses[i].totalDays));
            var newDiv = $('<div class="tile is-parent is-vertical">');
            var newArticle = $('<article class="tile is-child notification is-warning">')
            var newColumnMama = $('<div class="columns">');

            newArticle.append('<p class="title">' + capitalizedCourseName + ' Course Schedule');
            newArticle.append('<p class="subtitle"> You will complete this course in ' + userCourses[i].weeks + ' week(s) by following this weekly schedule</p>')

            var newColumn1 = $('<div class="column is-half">');
            var newColumn2 = $('<div class="column ">');
            var SlickOuterDiv = $('<div class="slick-outer-div">');

            for (var j = 0; j < userCourses[i].days.length; j++) {
                SlickOuterDiv.append('<div class="card"><header class="card-header"><p class="card-header-title">' + userCourses[i].days[j] + '</p></header><div class="card-content"><div class="content"><p> Read ' + pagesPerDay + ' pages per day of <span class="underline">' + capitalizedBookTitle + '</span></p><p class="is-small">(Approximately ' + minutesOfReading(pagesPerDay) + ' minutes of reading.)</p></div></div></div>');
            };

            var link1 = ('<a href="' + userCourses[i].articleOneUrl + '">' + userCourses[i].articleOneTitle + '</a>');
            var link2 = ('<a href="' + userCourses[i].articleTwoUrl + '">' + userCourses[i].articleTwoTitle + '</a>');
            var link3 = ('<a href="' + userCourses[i].articleThreeUrl + '">' + userCourses[i].articleThreeTitle + '</a>');

            var youtubeVideo1 = ('<div><iframe src="https://www.youtube.com/embed/' + userCourses[i].youtubeVideoOneId + '?version=3" width="200" height="160" frameborder="0"></div>');
            var youtubeVideo2 = ('<div><iframe src="https://www.youtube.com/embed/' + userCourses[i].youtubeVideoTwoId + '?version=3" width="200" height="160" frameborder="0"></div>');

            var amazonLink = "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords="

            newColumn1.append(SlickOuterDiv);
            newColumn2.append('<div class="card"><header class="card-header"><p class="card-header-title">Course Resources</p></header><div class="card-content"><div class="content"><img class="is-128" src="' + userCourses[i].bookImg + '"><p>Book: <span class="underline">' + capitalizedBookTitle + '</span> by ' + userCourses[i].bookAuthor + ' </p><a href="' + amazonLink + userCourses[i].bookIsbn + '"><p>Find me on Amazon</p></a><br><p>Articles:</p><p>' + link1 + '</p><p>' + link2 + '</p><p>' + link3 + '</p><p>Video: </p>' + youtubeVideo1 + '<br>' + youtubeVideo2 + '</div></div></div>');

            newColumnMama.append(newColumn1);
            newColumnMama.append(newColumn2)

            newArticle.append(newColumnMama);
            newDiv.append(newArticle);
            $("#course-schedule-goes-here").append(newDiv);
        }
    })
};

pullFromFirebase(user);
