//var
var topics = [];
var searchInput;

//API 

function getTopicImage() {
    $(".search-nav").html("  Search Topics");
    searchInput = $("search-nav").input.val().trim();

    var queryURL = "https://api.gettyimages.com/v3/images?ids=" + searchInput + "," + searchInput + "&Api-Key:r3apq2zxgpugn22tc83dahtb";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(queryURL);
        console.log(response);
    })
}

$(".search-button").on("click", function() {
    getTopicImage();
    // searchInput = $("search-nav").input.val().trim();
    // if (loggedIn) {
    //     if (topics.contains())
    // } else {

    // }
})
