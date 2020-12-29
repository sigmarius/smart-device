'use strict';

// аккордион на mobile в футере
(function () {
  var accordion = document.querySelectorAll('.accordion');
  var panels = document.querySelectorAll('.accordion__panel');

  document.querySelector('.accordion__panel--no-js').classList.remove('accordion__panel--no-js');

  if (accordion) {
    for (var i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function (evt) {

        for (var j = 0; j < panels.length; j++) {
          panels[j].classList.remove('accordion__panel--active');
        }

        var button = evt.target;
        button.classList.toggle('accordion--active');

        var panel = button.nextElementSibling;
        panel.classList.toggle('accordion__panel--active');

      });
    }
  }

})();
