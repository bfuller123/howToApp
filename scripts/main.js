var keyword = null;

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

//carousel from slick

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
