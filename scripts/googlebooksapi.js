var googleApi = {
  key: '&key=AIzaSyA76jppPMnGusjyw9dKXXRKWUO4IBGoFFw',
  url: 'https://www.googleapis.com/books/v1/volumes?',
  q: 'q=+subject:javascript+programming',
  results: '&maxResults=2'
};

$.ajax({
  url: googleApi.url+googleApi.q+googleApi.results+googleApi.key,
  method: 'GET'
}).done(function(response){
  console.log(response);
});
