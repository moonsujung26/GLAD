$(function () {

    $('.ht .inner .site>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggle();
    });
    $('.ht .inner .lang>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggle();
    });


    const mainVisualSlide = new Swiper('.main_visual_slide',{

    })



});