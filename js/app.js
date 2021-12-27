$(document).ready(function () {
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
});

let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function () {
    let ubicacionActual = window.pageYOffset;
    if (ubicacionPrincipal >= ubicacionActual) {
        $("nav").fadeIn("slow");
    } else {
        $("nav").fadeOut("slow");
    }
    ubicacionPrincipal = ubicacionActual;
}

$(".nav-brand").click((e) => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $(".intro").offset().top
    }, 1000);
})

$("#btn-intro").click((e) => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#about-me").offset().top
    }, 1000);
})


$(".about-btn").click((e) => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#about-me").offset().top
    }, 1000);
})

$(".trabajos-btn").click((e) => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#trabajos").offset().top
    }, 1000);
})

$(".skills-btn").click((e) => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
})
