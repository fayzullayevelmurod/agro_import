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
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
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
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 4, // показывать по 3 превью
	spaceBetween: 25, // расстояние между слайдами
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 62, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});

const img_calculation = document.querySelectorAll('.img_calculation');

if (img_calculation.length) {
  img_calculation.forEach(item => {
    const slect_img = item.querySelector('.selected_img img')
    const img_list = item.querySelectorAll('.img_list img');

    img_list.forEach(img => {
      img.onclick = () => {
        slect_img.setAttribute('src', img.getAttribute('src'));

        img_list.forEach(image => {
          if (image != img) {
            image.classList.remove('active');
          }
        })

        img.classList.add('active');
      }
    })
  })
}

const filter_items = document.querySelectorAll('.filter_datas .filter_item');
const filter_buttons = document.querySelectorAll('.filter_buttons_list button');
if (filter_items.length) {
  filter_buttons.forEach((btn, index) => {
    btn.onclick = () => {
      filter_items.forEach((item, i) => {
        if (i != index) {
          item.classList.remove('active');
        }
        else {
          item.classList.add('active');
        }
      })

      filter_buttons.forEach((btn2, index2) => {
        if (index2!= index) {
          btn2.classList.remove('active');
        } else {
          btn2.classList.add('active');
        }
      })
    }
  })
}