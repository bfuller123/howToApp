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
  courseName = null;
daysOfWeekArray = [];
numberOfDays = "";
totalPagesToRead = null;

$("#creat-course-link").on(click, function() {

  courseName = keyword;
  numberOfDays = $("[name='amountOfHours']").val().trim();

  if ($("[type='checkbox']").prop('checked') === true) {
    daysOfWeekArray.push(this.html);
  }

  totalPagesToRead = googleApi.bookOne.pages + googleApi.bookTwo.pages;






  database.ref().push({
    courseName: courseName,
    daysOfWeekArray: daysOfWeekArray,
    numberOfDays: dateAdded: firebase.database.ServerValue.TIMESTAMP,
  });






});
