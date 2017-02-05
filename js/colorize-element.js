'use strict';

window.colorizeElement = function (element, colors, property) {

  var colorizeRandomColor = function (evt) {

    if (evt.type === 'click' || window.isPressENTER(evt)) {
      var currentColor = element.style[property];

      element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
    }
  };

  element.addEventListener('click', colorizeRandomColor);
  element.addEventListener('keydown', colorizeRandomColor);
};
