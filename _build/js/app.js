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

/*
const callback = function(entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("animate__animated", "animate__fadeInUp");
        entry.target.classList.toggle(".isVisible");
    })
*/

const options = {
    rootMargin: "32px",
    threshold: 0
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
        }
    })
}, options);

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("animate__animated", "animate__fadeInLeft");
        }
    })
}, options);

const targets = document.querySelectorAll(".animated");
const imageTargets = document.querySelectorAll(".animatedImage");


targets.forEach( (target) => {
    observer.observe(target);
})
imageTargets.forEach( (target) => {
    observer2.observe(target);
})