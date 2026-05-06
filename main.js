(function () {
  var BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-hammockhostels";

  function initNavbar() {
    var nav = document.querySelector(".hh-navbar");
    if (!nav) return;

    var hero = document.querySelector(".hh-hero, .hh-page-hero");
    var transparent = nav.classList.contains("is-transparent");

    function update() {
      if (!transparent) return;
      var solid = window.scrollY > 48;
      nav.classList.toggle("is-solid", solid);
      nav.classList.toggle("is-transparent", !solid);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function wireBookingLinks() {
    document.querySelectorAll('a[data-booking="true"]').forEach(function (a) {
      if (!a.getAttribute("href")) {
        a.setAttribute("href", BOOKING_URL);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavbar();
    wireBookingLinks();
  });
})();
