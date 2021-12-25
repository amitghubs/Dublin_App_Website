const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 2,
  },
  560: {
    items: 3,
  },
  960: {
    items: 4,
  },
};

$(document).ready(function () {
  // banner owl carousel
  $("#slider_area .owl-carousel").owlCarousel({
    dots: false,
    loop: true,
    items: 1,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    autoplay: true,
    autoplayTimeout: 3000,
  });
  $("#box_area .owl-carousel").owlCarousel({
    dots: false,
    loop: true,
    items: 4,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: responsive,
  });

  $nav = $(".respons");
  $toggleCollapse = $(".toggle-collapse");

  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  // AOS Instance
  AOS.init();
});
