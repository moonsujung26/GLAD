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
        speed:800,
        // autoplay: {
        //     delay:2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: "#main_visual .main_visual_slide .dots",
          },
       
    });



    const mainOfferSlide = new Swiper('.main_offers_slide', {
        slidesPerView: 3,

    })


});