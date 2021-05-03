$(document).ready(function() {
    $(".nav-item").click(function() {

        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $("#toggler").click(function() {
        console.log("asdas");

        $('#wrap').toggleClass('toggled');

        var right = $('.slidbar').css("right");
        if (right == "0px") {
            $('.slidbar').css({ 'right': '-17rem' });

            $('.layer').fadeOut();

        } else {
            $('.slidbar').css({ 'right': '0' });

            $('.layer').fadeIn();
        }

    });

    $('.layer').click(function() {
        $('.slidbar').css({ 'right': '-17rem' });
        $('.layer').fadeOut();

    });

    $('.search-icon').click(function() {
        $(".search-input").slideToggle("slow");
    });




});