$(document).ready(function() {
  var youtubeAPI = {
    url: "https://www.googleapis.com/youtube/v3/search",
    part: "?part=snippet",
    results: "&maxResults=3",
    type: "&type=video",
    q: "&q=" + localStorage.getItem('keyword'),
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
        videoDiv.addClass('tile is-parent is-vertical');
        var channelTitle = $('<h2>').text(response.items[i].snippet.channelTitle);
        var title = $("<h3>").text(response.items[i].snippet.title);
        var videoFrameDiv = $('<div>');
        videoFrameDiv.addClass('box');

        var videoFrame = $('<iframe>');
        var videoUrl = 'https://www.youtube.com/embed/?v=';

        videoFrame.attr("src", videoUrl + response.items[i].id.videoId);

        videoDiv.append(videoFrameDiv);
        videoFrameDiv.append(channelTitle);
        videoFrameDiv.append(title);
        videoFrameDiv.append(videoFrame);

        $('#videoOutput').append(videoDiv);
      }
    });

});
