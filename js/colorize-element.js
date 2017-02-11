'use strict';

window.colorizeElement = (function () {

  return function (element, colors, property, callback) {

    var currentColor = element.style[property];

    var getRandomColor = function () {
      return window.utils.getRandomElementExcept(colors, currentColor);
    };

    if (typeof callback === 'function') {
      callback(element, getRandomColor(), property);
    }
  };
})();
