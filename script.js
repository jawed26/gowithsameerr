$(document).ready(function () {

    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 999,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('body').on('click','.nav-menu-bar', function () {
      $(this).addClass('active');
      $(this).closest('.header-flex').find('.navbar').addClass('active');
    })
    $('body').on('click', '.nav-menu-bar.active', function() {
      $(this).removeClass('active');
      $(this).closest('.header-flex').find('.navbar').removeClass('active');
    })

})