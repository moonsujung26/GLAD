$(function () {


    $('.ht .inner .site>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggle();
    });

    $('.ht .inner .lang>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggle();
    });


    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: "#main_visual .main_visual_slide .dots",
            clickable: true
        },


    });


    const mainOfferSlide = new Swiper('.main_offers_slide', {
        slidesPerView: 3,
        navigation: {
            nextEl: "#main_offers .arrows .prev",
            prevEl: "#main_offers .arrows .next",
        },

    });
    const mainFacilitySlide = new Swiper('#main_facility .left_slide', {
        slidesPerView: 3.5,

    })

});