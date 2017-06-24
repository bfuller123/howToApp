var userCoursesList = [];
var usersDatabase = firebase.database().ref().child('users');

function dynamicAddButtons(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      var button = $('<button>');
      button.addClass('button button-primary');
      button.attr('data-keyword', arr[i]);
      button.text(obj[i]);
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
  console.log(currentUserUid);
  userCoursesList = changeKeysToArray(coursesObj);
  console.log(userCoursesList);
  dynamicAddButtons(userCoursesList, coursesObj);
});
