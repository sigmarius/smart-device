'use strict';
// утилитарный модуль - экспортирует общие функции и переменные для всех модулей
(function () {
    window.utils = {
        KeyCode: {
            BACKSPACE: 'Backspace',
            ESCAPE: 'Escape'
        }
    };
}());
// меняет текст в последнем параграфе на .. в разделе О компании на планшете и мобильном
(function () {
    var WORDS_COUNT = 45;
    var DEVIDER = '..';
    var tablet = window.matchMedia('(max-width: 1023px)');
    var textContainer = document.querySelector('.about__description');
    var originalText = textContainer.innerText;
    var smallText = originalText.split(' ', WORDS_COUNT).join(' ').concat(DEVIDER);    // if (textContainer) {
                                                                                       //   var changeTextHandler = function (evt) {
                                                                                       //     if (evt.matches) {
                                                                                       //       textContainer.innerText = smallText;
                                                                                       //     } else {
                                                                                       //       textContainer.innerText = originalText;
                                                                                       //     }
                                                                                       //   };
                                                                                       // }
                                                                                       // tablet.addListener(changeTextHandler);
                                                                                       // changeTextHandler(tablet);
}());
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
}());
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
}());
// модальное окно Заказать звонок
(function () {
    var modalOpen = document.querySelector('.modal-overlay--open');
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
            body.classList.add('modal-overlay--open');
            document.addEventListener('keydown', escapeClickHandler);
        } else {
            body.classList.remove('modal-overlay--open');
            modal.classList.remove('modal-overlay--show');
            document.removeEventListener('keydown', escapeClickHandler);
        }
    };
    var escapeClickHandler = function (evt) {
        if (evt.key === window.utils.KeyCode.ESCAPE) {
            evt.preventDefault();
            setVisible(false);
        }
    };
    if (modal) {
        modal.addEventListener('click', function (evt) {
            if (evt.target === modal && evt.target !== form) {
                setVisible(false);
            }
        });
    }
    if (modalOpen) {
        modalOpen.addEventListener('click', function (evt) {
            evt.preventDefault();
            if (modal) {
                modal.classList.add('modal-overlay--show');
                setVisible(true);
                name.focus();
            }
            if (nameStorage && phoneStorage) {
                name.value = nameStorage;
                phone.value = phoneStorage;
                comment.value = commentStorage;
            }
        });
    }
    if (modalClose) {
        modalClose.addEventListener('click', function (evt) {
            evt.preventDefault();
            modal.classList.remove('modal-overlay--show');
            setVisible(false);
        });
    }
    if (form) {
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
    }
}());
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
}());