'use strict';

// Валидация номера телефона в модальном окне
(function () {

  var phoneNumber = document.querySelectorAll('[type=tel]');

  var setMask = function (input) {
    input.addEventListener('focus', function (evt) {
      if (!input.value && evt.key !== window.utils.KeyCode.BACKSPACE) {
        input.value = '+7(';
      } else {
        return;
      }
    });

    input.addEventListener('keydown', function (evt) {
      var numberLength = input.value.length;

      if (numberLength === 6 && evt.key !== window.utils.KeyCode.BACKSPACE) {
        input.value = input.value + ')';
      }
    });
  };

  if (phoneNumber) {
    for (var i = 0; i < phoneNumber.length; i++) {
      setMask(phoneNumber[i]);
    }
  }

})();
