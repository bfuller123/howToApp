var keyword = ;
var queryURL = "http://webhose.io/filterWebContent?token=dc252ff5-eb47-47ca-ad9a-504e1d3d7852&format=json&ts=1495063069223&sort=relevancy&q=language%3Aenglish%20" + keyword;

$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
	console.log(response)
});

