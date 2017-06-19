$(document).ready(function() {
  var youtubeAPI = {
    url: "https://www.googleapis.com/youtube/v3/search",
    part: "?part=snippet",
    results: "&maxResults=3",
    type: "&type=video",
    q: "&q=surfing",
    videoEmbed: "&videoEmbeddable=true",
    key: "&key=AIzaSyBnboNloog0d2dSKXk9zaz7FIR_p8JTLl4"
  };

  $.ajax({
      url: youtubeAPI.url + youtubeAPI.part + youtubeAPI.results + youtubeAPI.type + youtubeAPI.q + youtubeAPI.videoEmbed + youtubeAPI.key,
      method: "GET"
    })
    .done(function(response) {
      for (var i = 0; i < response.items.length; i++) {
        console.log(response.items[i]);
      }
    });

});

localStorage.getItem("keyword");
