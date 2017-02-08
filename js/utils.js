'use strict';

window.utils = (function () {
  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var getRandomElementExcept = function (arr, element) {
    var returnElement;

    while (!returnElement || returnElement === element) {
      returnElement = window.utils.getRandomElement(arr);
    }
    return returnElement;
  };

  return {
    getRandomElement: getRandomElement,
    getRandomElementExcept: getRandomElementExcept
  };
})();
