"use strict";

// const { createElement } = require("react");

window.addEventListener(`load`, load);

function load() {
  /* Перевірка мобільного браузера */
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  /* Додавання класу touch для HTML, якщо браузер мобільний */
  function addTouchAttr() {
    // Додавання data-fls-touch для HTML, якщо браузер мобільний
    if (isMobile.any())
      document.documentElement.setAttribute("data-fls-touch", "");
  }
  addTouchAttr();

  document.addEventListener(`click`, actions);

  window.addEventListener("scroll", actions);

  initButton()

  initHero()

  initSwiper()

  initHeader()


  function initHero() {
    const textBlockElement = document.querySelector(`.hero__text-block`);
    const imgElement = document.querySelector(`.hero__img`);
    const mathcMedia = window.matchMedia(`(width < 51.25rem)`);
    mathcMedia.addEventListener("change", replaceTitle);

    replaceTitle();

    function replaceTitle() {
      if (mathcMedia.matches) {
        if (textBlockElement && imgElement) {
          textBlockElement.insertAdjacentElement(`afterbegin`, imgElement);
        }
      } else {
        textBlockElement.insertAdjacentElement(`afterend`, imgElement);
      }
    }
  }

  function initButton() {
    const buttonElement = document.querySelector(`.header__registration`);
    const listElement = document.querySelector(`.header__list`);
    const actionsElement = document.querySelector(`.header__actions`);
    const mathMedia = window.matchMedia("(width <= 26.875rem)");
    mathMedia.addEventListener(`change`, () => {
      addButton();
    });

    addButton();

    function addButton() {
      if (buttonElement && listElement) {
        if (mathMedia.matches) {
          listElement.insertAdjacentElement(`afterbegin`, buttonElement);
        } else {
          actionsElement.insertAdjacentElement(`beforeend`, buttonElement);
        }
      }
    }
  }


  function initHeader() {
    const headerElement = document.querySelector(`.header__container`);
    const headerElementHeight = headerElement.offsetHeight;
    if (scrollY > 20) {
      headerElement.style.backgroundColor = `#fff`;
      headerElement.style.height = ``;
      headerElement.offsetHeight;
      headerElement.style.height = `76px`;
    } else if (scrollY < 20) {
      headerElement.offsetHeight;
      headerElement.style.height = ``;
      headerElement.style.backgroundColor = `transparent`;
    }
  }

  function actions(e) {
    const targerElement = e.target;
    const targetType = e.type;
    if (targetType === "click") {
      if (targerElement.closest(`.header__burger`)) {
        document.body.toggleAttribute(`open-burger`)
      }

      const regisrationElement = document.querySelector(`.registration`) 
      const closeElement = document.querySelector(`.registration__close`)
      if(targerElement.closest(`.header__registration`)) {
        if(regisrationElement) {
          document.body.setAttribute("open-registration","")
        }
      } else if(targerElement.closest(`.registration__close`)) {
        if(document.body.hasAttribute(`open-registration`) && targerElement.closest(`.registration__close`)) {
          document.body.removeAttribute(`open-registration`)
        }
      }
    }
    if (targetType === "scroll") {
      initHeader();
    }
  }

  initComutity()

  function initComutity() {
    const matchMedia = window.matchMedia(`(width < 50.625rem)`)
    const photoContainerElement = document.querySelector(`.comunity__photo`)
    const containerElement = document.querySelector(`.comunity__container`)
    const titleElement = document.querySelector(`.comunity__title`)
  
    matchMedia.addEventListener(`change`,() => {
      replacePhoto()
    })

    replacePhoto()

    function replacePhoto() {
      if(photoContainerElement && titleElement) {
        if(matchMedia.matches) {
          titleElement.insertAdjacentElement(`afterend`, photoContainerElement)
        } else {
          containerElement.insertAdjacentElement(`afterbegin`, photoContainerElement)
        }
      }
    }
  }


  function initSwiper() {
    const swiperElement = document.querySelector(`.swiper`)
    if (swiperElement) {
      const swiper = new Swiper(swiperElement, {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoHeight: true,

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

      });
    }
  }
  function initSliders() {
    const tdElement = document.querySelectorAll(".schedule__events table tbody tr")
    let slider = ``
    for (let i = 1; i <= tdElement.length; i++) {
      slider += `<div class="swiper-slide">Slide ${i} </div>`
    }
    const sliderWrapperElement = document.querySelector(`.swiper-wrapper`)
    sliderWrapperElement.insertAdjacentHTML("afterbegin", slider)
  }
}
initSliders()
function initSliders() {
  const tdElement = document.querySelectorAll(".schedule__events table tbody tr")
  const tdTitle = document.querySelectorAll(".schedule__events h3")
  const tdTime = document.querySelectorAll(".schedule__events time")
  const tdLink = document.querySelectorAll(".schedule__events a")
  const sliderWrapperElement = document.querySelector(`.swiper-wrapper`)
  if (tdElement.length && tdTitle.length && tdTime.length && tdLink.length && sliderWrapperElement) {
    let slider = ``
    for (let i = 0; i < tdElement.length; i++) {
      slider += `<div class="swiper-slide"><div class="swiper-slide__body"><div class="swiper-slide__text"> <h3>${tdTitle[i].textContent}</h3> <time datetime="${tdTime[i].getAttribute(`datetime`)}">${tdTime[i].textContent}</time></div><a href="#"><span>${tdLink[i].innerHTML}</span></a></div></div>`
    }
    
    sliderWrapperElement.insertAdjacentHTML("afterbegin", slider)
  }
}