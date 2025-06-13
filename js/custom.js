$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    const main_bread_slide = new Swiper('.main_bread_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
    });

    $('.main_bread .prev').on('click', function () {
        main_bread_slide.slidePrev();
    });

    $('.main_bread .next').on('click', function () {
        main_bread_slide.slideNext();
    });


});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});

$(function () {
    $('to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});
