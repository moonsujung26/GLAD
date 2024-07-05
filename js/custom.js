$(function () {


    $('.ht .inner .site>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });

    $('.ht .inner .lang>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
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
    const mainFacilitySlide = new Swiper('#main_facility .facility_slide', {
        slidesPerView: 1.8,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        speed: 800,
        // effect: "fade",
        pagination: {
            el: "#main_facility .dots",
            clickable: true,
        },
        navigation: {
            nextEl: "#main_facility .arrows .prev",
            prevEl: "#main_facility .arrows .next",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

    });

    const mainDiningSlide01 = new Swiper('#main_dining .tap_con .tap_slide01', {
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    const mainDiningSlide02 = new Swiper('#main_dining .tap_con .tap_slide02', {
        slidesPerView: 1,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    const mainDiningSlide03 = new Swiper('#main_dining .tap_con .tap_slide03', {
        slidesPerView: 1,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    $('#main_dining .inner .tap_menu li button').on('click', function () {
        $(this)
            .parent()
            .addClass('on')
            .siblings()
            .removeClass('on');

        let idx = $(this).parent().index();

        $('#main_dining .tap_con .con')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');

        $(this).next().stop().slideToggle();
        $(this).parent().stop().siblings().find('.desc').slideUp();

    });





});