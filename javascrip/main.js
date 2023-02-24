/////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      quti: 0,
    },
    500: {
      quti: 1,
    },
    700: {
      quti: 2,
    },
    900: {
      quti: 3,
    },
  },
});

// ///////////////////////////
// let form = document.querySelector(".form");
// let ic1 = document.querySelector(".");
// let ic2 = document.querySelector(".icon2");

// form.addEventListener("click", () => {
//   ic1.classList.toggle("active");
//   ic2.classList.toggle("active2");
// });