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

// меняет текст в span на .. в разделе О компании на планшете и мобильном

(function () {
  var tablet = window.matchMedia('(max-width: 1023px)');
  var span = document.querySelector('.about__toggle');

  var changeTextHandler = function (evt) {
    if (evt.matches) {
      span.textContent = '..';
    } else {
      span.textContent = ' (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
    }
  };

  tablet.addListener(changeTextHandler);
  changeTextHandler(tablet);

})();

// аккордион на mobile в футере
(function () {
  var accordion = document.querySelectorAll('.page-footer__accordion');

  for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function (evt) {
      var button = evt.target;
      button.classList.toggle('js-active');

      var panel = button.parentNode.nextElementSibling;

      if (panel.classList.contains('js-show')) {
        panel.classList.remove('js-show');
        panel.classList.add('js-hide');
      } else {
        panel.classList.add('js-show');
        panel.classList.remove('js-hide');
      }
    });
  }

})();
