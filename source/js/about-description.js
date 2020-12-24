'use strict';

// меняет текст в span на .. в разделе О компании на планшете и мобильном

(function () {
  var WORDS_COUNT = 45;
  var DEVIDER = '..';

  var tablet = window.matchMedia('(max-width: 1023px)');

  var textContainer = document.querySelector('.about__description');

  var originalText = textContainer.innerText;

  var smallText = originalText.split(' ', WORDS_COUNT).join(' ').concat(DEVIDER);

  if (textContainer) {
    var changeTextHandler = function (evt) {
      if (evt.matches) {
        textContainer.innerText = smallText;
      } else {
        textContainer.innerText = originalText;
      }
    };
  }

  tablet.addListener(changeTextHandler);
  changeTextHandler(tablet);

})();
