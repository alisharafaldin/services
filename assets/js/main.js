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
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 1,
          },
    },
  });
});
