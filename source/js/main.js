'use strict';

// меняет текст кнопки на mobile на главном экране hero
(function () {
  var mobile = window.matchMedia('(max-width: 767px)');
  var consultationButton = document.querySelector('.js-consultation');

  var changeTextHandler = function (evt) {
    if (evt.matches) {
      consultationButton.textContent = 'Бесплатная консультация';
    } else {
      consultationButton.textContent = 'Получить бесплатную консультацию';
    }
  };

  mobile.addListener(changeTextHandler);
  changeTextHandler(mobile);

})();
