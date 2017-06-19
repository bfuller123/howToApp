//Truncate string function for books and newsapi
function truncateString(str, num) {
    if (num > str.length) {
        return str;
    } else {
        str = str.substring(0, num);
        return str + "...";
    }
}

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

//On click to grab course which was clicked
$(".card").on("click", function() {
    localStorage.setItem("keyword", $(this).data("keyword"));
});

//Carousel from slick
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});


$('.calendar-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    accessibility: true,
    arrows: true,
});
