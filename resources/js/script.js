$(document).ready(function () {

    /* For the sticky navigation */
    $('.js-top-bottom-nav').waypoint(function (direction) {
        if (direction == "down") {
            $('.top-middle-nav').addClass('sticky');
        } else {
            $('.top-middle-nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* Mobile Nav */

    $('.js-nav-icon').click(function() {
        let nav = $('.top-middle-nav-center');
        let icon = $('.js-nav-icon i');
        nav.slideToggle(200);

        if(icon.hasClass('fa-bars')) {
            icon.addClass('fa-times')
            icon.removeClass('fa-bars')
        } else {
            icon.addClass('fa-bars')
            icon.removeClass('fa-times')
        }
    });
});
