'use strict';

// аккордион на mobile в футере
(function () {
  var accordion = document.querySelectorAll('.accordion');

  if (accordion) {
    for (var i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function (evt) {
        var button = evt.target;
        button.classList.toggle('accordion--active');

        var panel = button.parentNode.nextElementSibling;

        if (panel.classList.contains('accordion__panel--visible')) {
          panel.classList.remove('accordion__panel--visible');
          panel.classList.add('accordion__panel--hidden');
        } else {
          panel.classList.add('accordion__panel--visible');
          panel.classList.remove('accordion__panel--hidden');
        }
      });
    }
  }

})();
