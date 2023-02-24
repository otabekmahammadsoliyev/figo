/////////////////////////////////////////////////////////////////////
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// ///////////////////////////
// let form = document.querySelector(".form");
// let ic1 = document.querySelector(".");
// let ic2 = document.querySelector(".icon2");

// form.addEventListener("click", () => {
//   ic1.classList.toggle("active");
//   ic2.classList.toggle("active2");
// });
