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

// аккордион на mobile в футере
(function () {
  var accordion = document.querySelectorAll('.page-footer__accordion');

  for (var i=0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('js-active');

      var panel = this.parentNode.nextElementSibling;

      if (panel.classList.contains('js-active')) {
        panel.classList.remove('js-active');
        panel.classList.add('js-hide');
      } else {
        panel.classList.add('js-active');
        panel.classList.remove('js-hide');
      }
    });
  }

})();
