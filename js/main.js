$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  lazyLoad();

  $(".advanced-btn>button").click(function (e) {
    e.preventDefault();
    $(".advanced-form").slideToggle(300);
    $(this).toggleClass("active");
  });

  /* ~~~~~~~~~~~~~~~ Services Swiper ~~~~~~~~~~~~~~~ */
  var ServicesSwiper = new Swiper(".services-slider .swiper", {
    loop: true,
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
    a11y: {
      enabled: false,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /* ~~~~~~~~~~~~~~~ Testimonials Swiper ~~~~~~~~~~~~~~~ */
  var TestimonialsSwiper = new Swiper(".testimonials-slider .swiper", {
    // loop: true,
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 20,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /* ~~~~~~~~~~~~~~~ Gallery Swiper ~~~~~~~~~~~~~~~ */

  var Galleryswiper = new Swiper(".gallery-slider .swiper", {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,

    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    speed: 9000,
    a11y: {
      enabled: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /* ~~~~~~~~~~~~~~~ Footer ~~~~~~~~~~~~~~~ */
  if ($(window).width() <= 767) {
    $(".footer-title").click(function () {
      $(".footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-title").not(this).siblings().slideUp(500);
    });
  }

  /* ~~~~~~~~~~~~~~~ Menu ~~~~~~~~~~~~~~~ */
  if ($(window).width() <= 1299) {
    $(".menu-btn").click(function () {
      $(".menu-overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".menu-close,.menu-overlay").click(function () {
      $(".menu-overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });
  }

  flatpickr("input[type='date']");
  flatpickr("input[type='time']", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
  });
});

/* ~~~~~~~~~~~~~~~ Lazyload ~~~~~~~~~~~~~~~ */
function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  };

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });
  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image);
  });
}

function preloadImage(img) {
  img.src = img.getAttribute("data-src");
  img.onload = function () {
    img.parentElement.classList.remove("loading-img");
    img.parentElement.classList.add("loaded-img");
    img.parentElement.parentElement.classList.add("lazy-head-img");
  };
}

var loadFile = function (event) {
  var src = URL.createObjectURL(event.target.files[0]);
  $("<img src='" + src + "'/>").appendTo(".img-here");
};
