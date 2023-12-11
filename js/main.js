
$(document).ready(function () {


// ----------------- === mobile menu ===  ---------------------- //
    $('.burger').on('click', function () {
        $('.header__nav').toggleClass('active');
        $(this).toggleClass('on');
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


    // --- accordeon --- //
    $('.faq__header').on('click', function () {
        $this = $(this);
        $this.toggleClass('active');
        $this.next('.faq__body').slideToggle();
    });


    // --- smooth scroll --- //
    // const locoScroll = new LocomotiveScroll({
    //     el: document.querySelector(".smooth-scroll"),
    //     smooth: true
    // });

});