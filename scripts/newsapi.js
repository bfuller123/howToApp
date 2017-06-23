var articleOneApi = null,
    articleTwoApi = null,
    articleThreeApi = null;

var queryURL = "http://webhose.io/filterWebContent?token=2cf6560c-545f-49d2-9753-c41b63817bce&format=json&ts=1495063069223&size=3&sort=relevancy&q=language%3Aenglish%20" + localStorage.getItem("keyword");




$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
    console.log(response);
    for (var i = 0; i < response.posts.length; i++) {
        var newArticleDiv = $("<div class='content'>");
        var articleTitle = $("<a href='" + response.posts[i].url + " target='_blank'><p>").text(response.posts[i].title);

        var truncatedText = truncateString(response.posts[i].text, 250);

        var articleBlurb = $("<p>").text(truncatedText);

        newArticleDiv.append(articleTitle);
        newArticleDiv.append(articleBlurb);

        $("#articleContent").append(newArticleDiv);
    }

    articleOneApi = response.posts[0];
    articleTwoApi = response.posts[1];
    articleThreeApi = response.posts[2];

});
