const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'slider',
    freeMode: true,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //! Автоматическое перелистывание
    autoplay: {
        delay: 3500, //Задержка перед перелистыванием 1с = 1000мл/с
    },
});
