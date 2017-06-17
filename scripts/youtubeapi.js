var key = "AIzaSyBnboNloog0d2dSKXk9zaz7FIR_p8JTLl4";
var youtubeURL = "https://www.googleapis.com/youtube/v3/search?q=surfing&maxResults=25&part=snippet&key=" + key;

$.ajax({
  url: youtubeURL,
  method: "GET"
}).done(function(response) {
  console.log(response);
});
