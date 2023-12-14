
$(document).ready(function () {


    // ----------- === mobile menu === ------------ //
    $('.burger').on('click', function () {
        $('.header__nav').toggleClass('active');
        $(this).toggleClass('on');
    });

    // ------ === testimonials slider === ------ //
    $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 1880,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                }
            },
        ]
    });

    // ------ accordeon ------ //
    $('.faq__header').on('click', function () {
        $this = $(this);
        $this.toggleClass('active');
        $this.next('.faq__body').slideToggle();
    });


    // player
    if ($('#player').length) {
        const player = new Plyr("#player");
    }


});




AOS.init({
    duration: 1200,
    disable: 'mobile',
    easing: 'ease',
    once: true,
});