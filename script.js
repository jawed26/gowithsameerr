$(document).ready(function () {

    $('body').on('click','.nav-menu-bar', function () {
      $(this).addClass('active');
      $(this).closest('.header-flex').find('.navbar').addClass('active');
    })
    $('body').on('click', '.nav-menu-bar.active', function() {
      $(this).removeClass('active');
      $(this).closest('.header-flex').find('.navbar').removeClass('active');
    })

})
