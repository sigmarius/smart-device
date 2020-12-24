'use strict';

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
