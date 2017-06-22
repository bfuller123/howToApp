$(document).ready(function() {


  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      // videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }

  function stopVideo() {
    player.stopVideo();
  }



  var youtubeAPI = {
    url: "https://www.googleapis.com/youtube/v3/search",
    part: "?part=snippet",
    results: "&maxResults=2",
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
        videoDiv.addClass('column box youtubeBox');
        var channelTitle = $('<h6>').text(response.items[i].snippet.channelTitle);
        var title = $("<h6>");
        title.addClass('youtubeTitle');
        title.text(response.items[i].snippet.title);
        var videoFrameDiv = $('<div>');
        videoFrameDiv.addClass('youtubeBox');


        var videoFrame = $('<iframe>');
        var videoUrl = 'https://www.youtube.com/embed/';

        videoFrame.attr({
          src: videoUrl + response.items[i].id.videoId + "?version=3",
          width: 480,
          height: 270,
          frameborder: 0
        });

        console.log(videoFrame.frameborder);

        videoDiv.append(videoFrameDiv);
        videoFrameDiv.append(channelTitle);
        videoFrameDiv.append(title);
        videoFrameDiv.append(videoFrame);


        $('#player').append(videoDiv);
      }
    });



});
