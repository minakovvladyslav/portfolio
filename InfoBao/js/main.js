"use strict";

window.addEventListener(`load`, load);

function load() {
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
  }

  initFooter();

  initHeader();

  initInfo();

  initMainProducts();

  initAmerican();

  initKorean();

  initEuropian();

  initButtons()

  function initButtons() {
    const sliderElement = document.querySelector(`.swiper`)
    if(sliderElement) {
      const buittonSwiperElements = sliderElement.querySelectorAll(`.swiper .swiper-pagination-bullet `)
      buittonSwiperElements.forEach((button, index) => {
        button.style.cssText = `background-color: red ;`
      })
    }
  }

  function initInfo() {
    const activeOptionElement = document.querySelector(`.info__link--active`);
    if (activeOptionElement) {
      const optionValue = activeOptionElement.dataset.country;
      const cosmeticItemElements =
        document.querySelectorAll(`.info__cards > a`);
      cosmeticItemElements.forEach((item) => {
        item.closest(`[class*=--${optionValue}]`)
          ? (item.style.display = `flex`)
          : (item.style.display = `none`);
      });
    }
  }

  function initHeader() {
    const headerElement = document.querySelector(`.header`);
    const headerContainerElement = document.querySelector(`.header__container`);
    const headerLogoBlack = headerElement.querySelector(`.header__img--black`);
    if (scrollY > 20 && !headerLogoBlack) {
      headerContainerElement.style.cssText = `height: 74px;`;
      headerElement.style.cssText = `background-color: black; color: white;`;
    }
    if (scrollY > 20 && headerLogoBlack) {
      headerContainerElement.style.cssText = `height: 74px;`;
      headerElement.style.cssText = `background-color: grey; color: black;`;
    } else if (scrollY < 20) {
      headerContainerElement.style.cssText = ``;
      headerElement.style.cssText = ``;
    }
  }

  function initFooter() {
    const mathcMedia = window.matchMedia(`(width < 28.125rem)`);
    const footerLIstElement = document.querySelectorAll(`.footer__info`);
    mathcMedia.addEventListener(`change`, shortList);

    shortList();

    function shortList() {
      if (mathcMedia.matches) {
        footerLIstElement.forEach((item) => {
          item.style.height = 0;
        });
      } else {
        footerLIstElement.forEach((item) => {
          item.style.height = ``;
        });
      }
    }
  }

  function initAmerican() {
    const linkElements = document.querySelectorAll(
      `.cards-list__option--american`,
    );
    const activeOptionElement = document.querySelector(
      `.cards-list__option--american-active`,
    );
    if (linkElements && activeOptionElement) {
      const optionValue = activeOptionElement.dataset.country;
      const parentElement = activeOptionElement.parentElement;
      const nextSiblingElement = parentElement.nextElementSibling;
      const cosmeticItemElements = nextSiblingElement.querySelectorAll(`a`);
      cosmeticItemElements.forEach((item) => {
        item.closest(`[class*=--${optionValue}]`)
          ? (item.style.display = `flex`)
          : (item.style.display = `none`);
      });
    }
  }

  function initMainProducts() {
    const linkElements = document.querySelectorAll(`.cards-list__option--main`);
    const activeOptionElement = document.querySelector(
      `.cards-list__option--main-active`,
    );
    if (activeOptionElement && linkElements) {
      const optionValue = activeOptionElement.dataset.country;
      const parentElement = activeOptionElement.parentElement;
      const nextSiblingElement = parentElement.nextElementSibling;
      const cosmeticItemElements = nextSiblingElement.querySelectorAll(`a`);
      cosmeticItemElements.forEach((item) => {
        item.closest(`[class*=--${optionValue}]`)
          ? (item.style.display = `flex`)
          : (item.style.display = `none`);
      });
    }
  }

  const swiperElement = document.querySelector(`.products-other__swiper`);
  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      // Optional parameters
      // direction: "",
      loop: true,

      spaceBetween: 40,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
    });
  }

  function initEuropian() {
    const linkElements = document.querySelectorAll(
      `.cards-list__option--europian`,
    );
    const activeOptionElement = document.querySelector(
      `.cards-list__option--europian-active`,
    );
    if (linkElements && activeOptionElement) {
      const optionValue = activeOptionElement.dataset.country;
      const parentElement = activeOptionElement.parentElement;
      const nextSiblingElement = parentElement.nextElementSibling;
      const cosmeticItemElements = nextSiblingElement.querySelectorAll(`a`);
      cosmeticItemElements.forEach((item) => {
        item.closest(`[class*=--${optionValue}]`)
          ? (item.style.display = `flex`)
          : (item.style.display = `none`);
      });
    }
  }

  function initKorean() {
    const linkElements = document.querySelectorAll(
      `.cards-list__option--korean`,
    );
    const activeOptionElement = document.querySelector(
      `.cards-list__option--korean-active`,
    );
    if (linkElements && activeOptionElement) {
      const optionValue = activeOptionElement.dataset.country;
      const parentElement = activeOptionElement.parentElement;
      const nextSiblingElement = parentElement.nextElementSibling;
      const cosmeticItemElements = nextSiblingElement.querySelectorAll(`a`);
      cosmeticItemElements.forEach((item) => {
        item.closest(`[class*=--${optionValue}]`)
          ? (item.style.display = `flex`)
          : (item.style.display = `none`);
      });
    }
  }

  document.addEventListener(`click`, actions);
  document.addEventListener(`scroll`, actions);

  function actions(e) {
    const targetElement = e.target;
    const targetType = e.type;
    if (targetType === `click`) {
      if (targetElement.closest(`.header__burger`)) {
        const bergerElement = document.querySelector(`.header__burger`);
        document.documentElement.toggleAttribute(`data-burger`);
      }

      if (targetElement.closest(`.footer__title`)) {
        const currentTitleElement = targetElement.closest(`.footer__title`);
        const ulElement = currentTitleElement.nextElementSibling;
        if (window.innerWidth < 450) {
          currentTitleElement.toggleAttribute(`data-open-footer`);
          const activeTitleElement =
            document.querySelector(`[data-open-footer]`);
          if (activeTitleElement && activeTitleElement != currentTitleElement) {
            closeFooter();
          }

          function closeFooter() {
            activeTitleElement.removeAttribute(`data-open-footer`);
            activeTitleElement.nextElementSibling.style.height = 0;
          }

          if (currentTitleElement.hasAttribute(`data-open-footer`)) {
            ulElement.style.height = ``;
            const offsetHeight = ulElement.offsetHeight;
            ulElement.style.height = 0;
            ulElement.offsetHeight;
            ulElement.style.height = `${offsetHeight}px`;
          } else {
            ulElement.style.height = 0;
          }
        }
      }
      if (targetElement.closest(`.cards-list__option--korean`)) {
        const currentOptionElement = targetElement.closest(
          `.cards-list__option--korean`,
        );
        const linkElements = document.querySelectorAll(
          `.cards-list__option--korean`,
        );
        const activeOptionElement = document.querySelector(
          `.cards-list__option--korean-active`,
        );
        const optionValue = currentOptionElement.dataset.country;
        const parentElement = currentOptionElement.parentElement;
        const nextSiblingElement = parentElement.nextElementSibling;
        const cosmeticItemElements = nextSiblingElement.querySelectorAll(`a`);
        if (
          activeOptionElement &&
          activeOptionElement !== currentOptionElement
        ) {
          activeOptionElement.classList.remove(
            `cards-list__option--korean-active`,
          );
          activeOptionElement.firstElementChild.classList.remove(
            `cards-list__link--active`,
          );
          currentOptionElement.classList.add(
            `cards-list__option--korean-active`,
          );
          currentOptionElement.firstElementChild.classList.add(
            `cards-list__link--active`,
          );
        }
        cosmeticItemElements.forEach((item) => {
          item.closest(`[class*=--${optionValue}]`)
            ? (item.style.display = `flex`)
            : (item.style.display = `none`);
        });
        e.preventDefault();
      }

      if (targetElement.closest(`.cards-list__option--american`)) {
        const currentOptionElement = targetElement.closest(
          `.cards-list__option--american`,
        );
        const linkElements = document.querySelectorAll(
          `.cards-list__option--american`,
        );
        const activeOptionElement = document.querySelector(
          `.cards-list__option--american-active`,
        );
        const optionValue = currentOptionElement.dataset.country;
        const parentElement = currentOptionElement.parentElement;
        const nextSiblingElement = parentElement.nextElementSibling;
        const cosmeticItemElements = nextSiblingElement.querySelectorAll(`a`);
        if (
          activeOptionElement &&
          activeOptionElement !== currentOptionElement
        ) {
          activeOptionElement.classList.remove(
            `cards-list__option--american-active`,
          );
          activeOptionElement.firstElementChild.classList.remove(
            `cards-list__link--active`,
          );
          currentOptionElement.classList.add(
            `cards-list__option--american-active`,
          );
          currentOptionElement.firstElementChild.classList.add(
            `cards-list__link--active`,
          );
        }
        cosmeticItemElements.forEach((item) => {
          item.closest(`[class*=--${optionValue}]`)
            ? (item.style.display = `flex`)
            : (item.style.display = `none`);
        });
        e.preventDefault();
      }

      if (targetElement.closest(`.cards-list__option--europian`)) {
        const currentOptionElement = targetElement.closest(
          `.cards-list__option--europian`,
        );
        const linkElements = document.querySelectorAll(
          `.cards-list__option--europian`,
        );
        const activeOptionElement = document.querySelector(
          `.cards-list__option--europian-active`,
        );
        const optionValue = currentOptionElement.dataset.country;
        const parentElement = currentOptionElement.parentElement;
        const nextSiblingElement = parentElement.nextElementSibling;
        const cosmeticItemElements = nextSiblingElement.querySelectorAll(`a`);
        if (
          activeOptionElement &&
          activeOptionElement !== currentOptionElement
        ) {
          activeOptionElement.classList.remove(
            `cards-list__option--europian-active`,
          );
          activeOptionElement.firstElementChild.classList.remove(
            `cards-list__link--active`,
          );
          currentOptionElement.classList.add(
            `cards-list__option--europian-active`,
          );
          currentOptionElement.firstElementChild.classList.add(
            `cards-list__link--active`,
          );
        }
        cosmeticItemElements.forEach((item) => {
          item.closest(`[class*=--${optionValue}]`)
            ? (item.style.display = `flex`)
            : (item.style.display = `none`);
        });
        e.preventDefault();
      }

      if (targetElement.closest(`.cards-list__option--main`)) {
        const currentOptionElement = targetElement.closest(
          `.cards-list__option--main`,
        );
        const linkElements = document.querySelectorAll(
          `.cards-list__option--main`,
        );
        const activeOptionElement = document.querySelector(
          `.cards-list__option--main-active`,
        );
        const optionValue = currentOptionElement.dataset.country;
        const parentElement = currentOptionElement.parentElement;
        const nextSiblingElement = parentElement.nextElementSibling;
        const cosmeticItemElements = nextSiblingElement.querySelectorAll(`a`);
        if (
          activeOptionElement &&
          activeOptionElement !== currentOptionElement
        ) {
          activeOptionElement.classList.remove(
            `cards-list__option--main-active`,
          );
          activeOptionElement.firstElementChild.classList.remove(
            `cards-list__link--active`,
          );
          currentOptionElement.classList.add(`cards-list__option--main-active`);
          currentOptionElement.firstElementChild.classList.add(
            `cards-list__link--active`,
          );
        }
        cosmeticItemElements.forEach((item) => {
          item.closest(`[class*=--${optionValue}]`)
            ? (item.style.display = `flex`)
            : (item.style.display = `none`);
        });
        e.preventDefault();
      }
    } else if (targetType === "scroll") {
      initHeader();
    }
  }
}
