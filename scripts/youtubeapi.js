$(document).ready(function() {
  var youtubeAPI = {
    url: "https://www.googleapis.com/youtube/v3/search",
    q: "?q=surfing",
    results: "&maxResults=3",
    part: "&part=snippet",
    key: "&key=AIzaSyBnboNloog0d2dSKXk9zaz7FIR_p8JTLl4",
  };

  $.ajax({
    url: youtubeAPI.url + youtubeAPI.q + youtubeAPI.results + youtubeAPI.part + youtubeAPI.key,
    method: "GET"
  }).done(function(response) {
    console.log(response);
  });

});
