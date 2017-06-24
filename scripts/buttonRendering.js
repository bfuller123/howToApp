var userCoursesList = [];
var usersDatabase = firebase.database().ref().child('users');

function dynamicAddButtons(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      var button = $('<a>');
      button.addClass('button button-primary white-background dark-gray-font course-button');
      button.attr('data-keyword', arr[i]);
      button.attr('href', 'syllabusview.html');
      button.text(arr[i]);
      $('.user-topic-buttons-div').append(button);
    }
}

function changeKeysToArray(obj) {
    return Object.keys(obj);
}

usersDatabase.on('value', function(snapshot) {
  $('.user-topic-buttons-div').html('');
  var currentUserUid = firebase.auth().currentUser.uid;
  var coursesObj = snapshot.val()[currentUserUid].courses;
  userCoursesList = changeKeysToArray(coursesObj);
  dynamicAddButtons(userCoursesList, coursesObj);
});

//TODO: need to add functionality to buttons rendered on home page
// $('.course-button').on('click', function() {
//   window.location.href = 'syllabusview.html';
// })
