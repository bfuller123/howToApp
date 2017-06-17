var googleApi = {
    key: '&key=AIzaSyA76jppPMnGusjyw9dKXXRKWUO4IBGoFFw',
    url: 'https://www.googleapis.com/books/v1/volumes?',
    q: 'q=+subject:javascript+programming',
    results: '&maxResults=2'
};

$.ajax({
    url: googleApi.url + googleApi.q + googleApi.results + googleApi.key,
    method: 'GET'
}).done(function(response) {
    console.log(response);
});


//Login Buttons
$(".modal-close").on("click", function() {
    $(".modal").removeClass("is-active");
})
$(".modal-background").on("click", function() {
    $(".modal").removeClass("is-active");
})

$("#loginButton").on("click", function() {
    $(".login").addClass("is-active");
})



//carousel from slick

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
