// Smooth scrolling
$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  var target = this.hash;
  var $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top,
      },
      800,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
});

// Hide/Show Navbar on scroll
var lastScrollTop = 0;
var navbar = $(".navbar");

$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  if (st > lastScrollTop) {
    // Downscroll code
    navbar.fadeOut();
  } else {
    // Upscroll code
    navbar.fadeIn();
  }

  lastScrollTop = st;
});

$(document).ready(function () {
  // Owl Carousel
  $(".studio-slider-owl").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    margin: 20,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      991: { items: 3 },
      1200: { items: 3 },
      1920: { items: 3 },
    },
  });

  // Swiper
  var mySwiper = new Swiper(".studio-slider-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      1920: { slidesPerView: 3 },
    },
  });
});

//Counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 100; // Decreased speed for slower counting

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});

$(document).ready(function () {
  $(".studio-slider").owlCarousel({
    items: 12,
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 5000, // Set autoplay interval in milliseconds (e.g., 5000 for 5 seconds)
    navText: [
      "<i class='bi bi-chevron-left'></i>",
      "<i class='bi bi-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
