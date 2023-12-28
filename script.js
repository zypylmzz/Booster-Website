// Smooth scroll animation
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
        window.location.hash = "";
      }
    );
});

// Hide/Show Navbar on scroll
let lastScrollTop = 0;
let navbar = $(".navbar");

$(window).scroll(function () {
  let scroll = $(this).scrollTop();

  if (scroll > lastScrollTop) {
    // Downscroll code
    navbar.fadeOut();
  } else {
    // Upscroll code
    navbar.fadeIn();
  }

  lastScrollTop = scroll;

  // Footer visibility
  let windowHeight = $(window).height();
  let documentHeight = $(document).height();

  if (scroll + windowHeight >= documentHeight) {
    $("footer").css("bottom", 0);
  } else {
    $("footer").css("bottom", -100);
  }
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
mySwiper.navigation.destroy();
mySwiper.pagination.destroy();

// Counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 30000;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 100);
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

document.addEventListener("DOMContentLoaded", function () {
  // Studio Slider
  document.querySelectorAll(".studio-slider .single-box").forEach((box) => {
    let img = box.querySelector(".img-area img");
    let overlay = box.querySelector(".overlay");
    let infoArea = box.querySelector(".info-area");

    box.addEventListener("click", function () {
      if (!box.classList.contains("logo-enlarged")) {
        document
          .querySelectorAll(".studio-slider .single-box")
          .forEach((otherBox) => {
            otherBox.classList.remove("logo-enlarged");
            otherBox.querySelector(".img-area img").style.transform =
              "scale(1)";
            otherBox.querySelector(".overlay").style.opacity = 0;
            otherBox.querySelector(".info-area").style.opacity = 0;
          });

        box.classList.add("logo-enlarged");
        img.style.transform = "scale(1.2)";
        overlay.style.opacity = 1;
        infoArea.style.opacity = 1;
      }
    });

    box.addEventListener("mouseleave", function () {
      if (box.classList.contains("logo-enlarged")) {
        box.classList.remove("logo-enlarged");
        img.style.transform = "scale(1)";
        overlay.style.opacity = 0;
        infoArea.style.opacity = 0;
      }
    });
  });

  // Testimonial Box
  document.querySelectorAll(".testmonial-box .single-box").forEach((box) => {
    let p = box.querySelector("p");

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
});

