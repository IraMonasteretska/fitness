
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
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false
    });

    // ------ accordeon ------ //
    $('.faq__header').on('click', function () {
        $this = $(this);
        $this.toggleClass('active');
        $this.next('.faq__body').slideToggle();
    });




    // var advantages = $('.advantages');
    // var background = $('.background');

    // function updateStyles() {
    //     var scrollPos = $(window).scrollTop();
    //     var elementOffset = advantages.height();
    //     var windowHeight = $(window).height();
    //     var start = scrollPos - elementOffset - 400

    //     console.log(scrollPos);
    //     console.log(elementOffset);
    //     console.log(start);

    //     if (scrollPos > elementOffset + 400) {

    //         var rotateValue = 0.05 * (start * 0.1);
    //         background.css({
    //             'transform': 'rotate(' + rotateValue + 'deg)'
    //         });

    //     } else {
    //         background.css({
    //             'transform': 'rotate(' + 1 + 'deg)'
    //         });
    //     }
    // }
    // $(window).scroll(updateStyles);

    // $(document).ready(updateStyles);


});

if (document.querySelector('video')) {
    // const player = new Plyr('#player');
    document.addEventListener('DOMContentLoaded', () => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const controls = [
            'play-large', // The large play button in the center
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
        ];

        // const player = new Plyr('#player', { controls });
        const players = Plyr.setup('.video__controls', {
            controls,
            autoplay: 'true',
        });

        // Expose
        window.players = players;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }
    });
}