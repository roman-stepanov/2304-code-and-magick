'use strict';

window.colorizeElement = (function () {

  return function (element, colors, property) {
    var colorizeRandomColor = function (evt) {

      if (evt.type === 'click' || window.evtPressKey.isPressENTER(evt)) {
        var currentColor = element.style[property];

        element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
      }
    };

    element.addEventListener('click', colorizeRandomColor);
    element.addEventListener('keydown', colorizeRandomColor);
  };
})();
