var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  centeredSlides: false,
  centeredSlidesBounds: false,
  loop: true,
  breakpoints: {
    840: {
      slidesPerView: 2.8,
    },
    768: {
      slidesPerView: 2.2,
    },
    450: {
      slidesPerView: 1.6,
      spaceBetween: 24,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1.1,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2.05,
      spaceBetween: 24,
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 1.5,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1350: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2.05,
      spaceBetween: 24,
    }
  }
});

// Инициализация превью слайдера
const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: "vertical", // вертикальная прокрутка
  slidesPerView: 4, // показывать по 3 превью
  spaceBetween: 25, // расстояние между слайдами
  navigation: {
    // задаем кнопки навигации
    nextEl: ".slider__next", // кнопка Next
    prevEl: ".slider__prev", // кнопка Prev
  },
  freeMode: true, // при перетаскивании превью ведет себя как при скролле
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: "horizontal", // горизонтальная прокрутка
    },
    768: {
      // при 768px и выше
      direction: "vertical", // вертикальная прокрутка
    },
  },
});
// Инициализация слайдера изображений
const sliderImages = new Swiper(".slider__images .swiper-container", {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: "vertical", // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 62, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: {
    // задаем кнопки навигации
    nextEl: ".slider__next", // кнопка Next
    prevEl: ".slider__prev", // кнопка Prev
  },
  grabCursor: true, // менять иконку курсора
  thumbs: {
    // указываем на превью слайдер
    swiper: sliderThumbs, // указываем имя превью слайдера
  },
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: "horizontal", // горизонтальная прокрутка
    },
    768: {
      // при 768px и выше
      direction: "vertical", // вертикальная прокрутка
    },
  },
});

const img_calculation = document.querySelectorAll(".img_calculation");

if (img_calculation.length) {
  img_calculation.forEach((item) => {
    const slect_img = item.querySelector(".selected_img img");
    const img_list = item.querySelectorAll(".img_list img");

    img_list.forEach((img) => {
      img.onclick = () => {
        slect_img.setAttribute("src", img.getAttribute("src"));

        img_list.forEach((image) => {
          if (image != img) {
            image.classList.remove("active");
          }
        });

        img.classList.add("active");
      };
    });
  });
}

const filter_items = document.querySelectorAll(".filter_datas .filter_item");
const filter_buttons = document.querySelectorAll(".filter_buttons_list button");
if (filter_items.length) {
  filter_buttons.forEach((btn, index) => {
    btn.onclick = () => {
      filter_items.forEach((item, i) => {
        if (i != index) {
          item.classList.remove("active");
        } else {
          item.classList.add("active");
        }
      });

      filter_buttons.forEach((btn2, index2) => {
        if (index2 != index) {
          btn2.classList.remove("active");
        } else {
          btn2.classList.add("active");
        }
      });
    };
  });
}

const mainForm = document.querySelector(".main__form-btn");
let main_form_boolean = true;
const order_formClose = document.querySelector(".order_form-close");
const order_form = document.querySelector(".order_form");
mainForm.addEventListener("click", () => {
  order_form.style.top = "0";
});
order_formClose.addEventListener("click", () => {
  order_form.style.top = "-100%";
});
