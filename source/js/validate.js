'use strict';

// Валидация номера телефона в модальном окне
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

  if (phoneNumber) {
    for (var i = 0; i < phoneNumber.length; i++) {
      setMask(phoneNumber[i]);
    }
  }

})();
