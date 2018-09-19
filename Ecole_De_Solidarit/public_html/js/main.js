$(document).ready(function () {
    $(".mobile-icon").click(function () {
        $(".menu").toggle();
        $(".mobile-icon").toggleClass("fa-bars fa-times");
    });
});