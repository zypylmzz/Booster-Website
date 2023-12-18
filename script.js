$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  let target = this.hash;
  let $target = $(target);

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
let lastScrollTop = 0;
let navbar = $(".navbar");

$(window).scroll(function (event) {
  let st = $(this).scrollTop();

  if (st > lastScrollTop) {
    // Downscroll code
    navbar.fadeOut();
  } else {
    // Upscroll code
    navbar.fadeIn();
  }

  lastScrollTop = st;
});

// Owl Carousel Initialization
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
let mySwiper = new Swiper(".studio-slider-swiper", {
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

// Bu satırları ekleyerek navigation (kaydırma tuşları) ve pagination (sayfalama noktaları) öğelerini kaldırabilirsiniz
mySwiper.navigation.destroy();
mySwiper.pagination.destroy();

// Counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 5000;

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

// Owl Carousel Initialization
$(".studio-slider").owlCarousel({
  items: 12,
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  navText: [],
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

// Testimonial Box
document.querySelectorAll(".testmonial-box .single-box").forEach((box) => {
  let p = box.querySelector("p");
  let linkedinButton = box.querySelector(".linkedin-button");

  p.style.display = "none";

  box.addEventListener("click", function () {
    p.style.display = p.style.display === "none" ? "block" : "none";

    if (box.classList.contains("enlarged")) {
      box.classList.remove("enlarged");
    } else {
      document
        .querySelectorAll(".testmonial-box .single-box")
        .forEach((otherBox) => {
          otherBox.classList.remove("enlarged");
        });

      box.classList.add("enlarged");
    }
  });

  box.addEventListener("mouseleave", function () {
    if (box.classList.contains("enlarged")) {
      box.classList.remove("enlarged");
    }
  });
});

