var keyword = "cooking";
var queryURL = "http://webhose.io/filterWebContent?token=dc252ff5-eb47-47ca-ad9a-504e1d3d7852&format=json&ts=1495063069223&size=6&sort=relevancy&q=language%3Aenglish%20" + keyword;

$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
    console.log(response)
    for (var i = 0; i < response.posts.length; i++) {
        var newArticleDiv = $("<div class='content'>");
        var articleTitle = $("<a href='"resonse.posts[i].url"'><p>").text(response.posts[i].title);
        var articleBlurb = $("<p>").text("")

        newArticleDiv.append(articleTitle);
        newArticleDiv.append(articleBlurb);

        $("#articleContent").append(newArticleDiv);
    };

});