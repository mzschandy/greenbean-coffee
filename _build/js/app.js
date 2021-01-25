//$(document).foundation();

window.onscroll = function() {
    navScroll()
}

function navScroll() {
    if (document.body.scrollTop > 141 || document.documentElement.scrollTop > 80) {
        console.log("change");
        $("#header").addClass("scroll");
    } else {
        console.log("change back");
        $("#header").removeClass("scroll");
    }
}

$(document).ready(function() {
    $(".menuBtn").click(function() {
        $(".mobile").css("height", "100%")
    })
    $(".closeBtn").click(function() {
        $(".mobile").css("height", "0%")
    })
})
