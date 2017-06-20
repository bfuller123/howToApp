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
      console.log(response);
      for (var i = 0; i < response.items.length; i++) {
        var videoDiv = $("<div>");
        var channelTitle = $('<h2>').text(response.items[i].snippet.channelTitle);
        var title = $("<h3>").text(response.items[i].snippet.title);
        var videoFrameDiv = $('<div>');
        videoFrameDiv.addClass('tile is-parent is-vertical');
        // var vidBox = $('<div');// vidBox.addClass('box');

        var videoFrame = $('<iframe>');
        var videoUrl = 'https://www.youtube.com/embed/?v=';

        videoFrame.attr("src", videoUrl + response.items[i].id.videoId);

        videoFrameDiv.append(videoFrame);
        videoDiv.append(channelTitle);
        videoDiv.append(title);

        $('#videoOutput').append(videoDiv);
        $('#videoOutput').append(videoFrame);
      }
    });

});

// localStorage.getItem("keyword");
