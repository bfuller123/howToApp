$(document).ready(function($) {
    var googleApi = {
      key: '&key=AIzaSyA76jppPMnGusjyw9dKXXRKWUO4IBGoFFw',
      url: 'https://www.googleapis.com/books/v1/volumes?',
      q: 'q=+subject:javascript+programming',
      results: '&maxResults=2',
      bookOne: {
        title: null,
        author: null,
        pages: 0,
        image: null
      }
    };

    var pageManipulation = {
        addAuthor: function(book, author) {
            $("#"+book+"Author").text(author);
        },
        addTitle: function(book, title) {
            $("#"+book+"Title").text(title);
        }
    }

    $.ajax({
      url: googleApi.url+googleApi.q+googleApi.results+googleApi.key,
      method: 'GET'
    }).done(function(response){
      console.log(response);
      googleApi.bookOne.pages = response.items[0].volumeInfo.pageCount;
      googleApi.bookOne.title = response.items[0].volumeInfo.title;
      googleApi.bookOne.author = response.items[0].volumeInfo.authors[0];
      pageManipulation.addAuthor("bookOne", googleApi.bookOne.author);
      pageManipulation.addTitle("bookOne", googleApi.bookOne.title);
    });
});

