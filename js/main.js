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

// модальное окно Заказать звонок
(function () {
  var KeyCode = {
    ESCAPE: 'Escape',
  };
  var modalOpen = document.querySelector('.modal-open');
  var modalClose = document.querySelector('.modal__close');
  var modal = document.querySelector('.modal');
  var body = document.querySelector('body');

  var name = document.querySelector('[name=call-name]');
  var phone = document.querySelector('[name=call-phone]');
  var comment = document.querySelector('[name=call-comment]');
  var form = document.querySelector('.form--modal');

  var isStorage = true;
  var nameStorage = '';
  var phoneStorage = '';
  var commentStorage = '';

  try {
    nameStorage = localStorage.getItem('nameStorage');
    phoneStorage = localStorage.getItem('phoneStorage');
    commentStorage = localStorage.getItem('commentStorage');
  } catch (err) {
    isStorage = false;
  }

  var setVisible = function (visible) {
    if (visible) {
      body.classList.add('modal-open');
      document.addEventListener('keydown', escapeClickGandler);
    } else {
      body.classList.remove('modal-open');
      modal.classList.remove('modal-show');
      document.removeEventListener('keydown', escapeClickGandler);
    }
  };

  var escapeClickGandler = function (evt) {
    if (evt.key === KeyCode.ESCAPE) {
      evt.preventDefault();
      setVisible(false);
    }
  };

  modal.addEventListener('click', function (evt) {
    if (evt.target === modal && evt.target !== form) {
      setVisible(false);
    }
  });

  modalOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal-show');
    setVisible(true);
    name.focus();

    if (nameStorage && phoneStorage) {
      name.value = nameStorage;
      phone.value = phoneStorage;
      comment.value = commentStorage;
    }
  });

  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    setVisible(false);
  });

  form.addEventListener('submit', function (evt) {
    if (!name.value || !phone.value) {
      evt.preventDefault();
    } else {
      if (isStorage) {
        localStorage.setItem('nameStorage', name.value);
        localStorage.setItem('phoneStorage', phone.value);
        localStorage.setItem('commentStorage', comment.value);
      }
    }
  });

})();

// Плавная прокрутка до якоря
(function () {
  var links = document.querySelectorAll('[data-link]');

  for (var i = 0; i < links.length; i++) {

    links[i].addEventListener('click', function (evt) {

      var target = document.querySelector('[id=' + evt.target.dataset.link + ']');

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

})();


// Валидация номера телефона
(function () {
  var phoneNumber = document.querySelectorAll('[type=tel]');

  var setMask = function (input) {
    input.addEventListener('focus', function () {
      if (!input.value) {
        input.value = '+7(';
      } else {
        return;
      }
    });

    input.addEventListener('input', function () {
      var numberLength = input.value.length;

      if (numberLength === 6) {
        input.value = input.value + ')';
      }
    });
  };

  for (var i = 0; i < phoneNumber.length; i++) {
    setMask(phoneNumber[i]);
  }
})();
