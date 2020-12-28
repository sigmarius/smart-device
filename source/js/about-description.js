'use strict';

// меняет текст в последнем параграфе на .. в разделе О компании на планшете и мобильном

(function () {
  var WORDS_COUNT = 46;
  var DEVIDER = '..';

  var tablet = window.matchMedia('(max-width: 1023px)');

  var textContainer = document.querySelector('.about__description');

  var originalText = textContainer.innerText;

  var smallText = originalText.split(' ', WORDS_COUNT).join(' ').concat(DEVIDER);

  var paragraphs = originalText.split('. ');

  textContainer.innerHTML = '';

  var first = paragraphs[0]+ '. ' +paragraphs[1] + '. ';
  var second = paragraphs[2]+ '. ' +paragraphs[3] + '. ' + paragraphs[4];

  var newParagraphs = [first, second];

  var createParagraph = function(elem) {
    var p = document.createElement('p');
    p.textContent = elem;
    textContainer.appendChild(p);
  };

  for (var i = 0; i < newParagraphs.length; i++) {
    createParagraph(newParagraphs[i]);
  }

  console.log(newParagraphs);
  
  console.log(smallText);

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
