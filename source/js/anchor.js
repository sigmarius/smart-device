'use strict';

// Плавная прокрутка до якоря
(function () {
  var links = document.querySelectorAll('[data-link]');

  if (links) {
    for (var i = 0; i < links.length; i++) {

      links[i].addEventListener('click', function (evt) {

        var target = document.querySelector('[id=' + evt.target.dataset.link + ']');

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  }

})();
