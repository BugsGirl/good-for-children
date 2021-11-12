
$(".header .header__bars").on('click', function () {

  var selector = $(".header .header__nav")

  if (selector.hasClass('shown')) {
    selector.css('right', "100%");
    selector.removeClass('shown');
  } else {
    selector.css('right', "0");
    selector.addClass('shown');
  }
});

$(".header .header__nav span").on('click', function () {

  var selector = $(".header .header__nav")

  if (selector.hasClass('shown')) {
    selector.css('right', "100%");
    selector.removeClass('shown');
  } else {
    selector.css('right', "0");
    selector.addClass('shown');
  }
});

var videoswiper = new Swiper('.testimonial__swiper', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  slidesPerView: 1
})