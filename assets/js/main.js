$(function () {
  $(".show-menu").click(function () {
    $(".header .menu-website").addClass("show");
  });

  $(".close-menu").click(function () {
    $(".header .menu-website").removeClass("show");
  });

  // تشغيل السلايدر
  $(".slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
          },
    },
  });
});
