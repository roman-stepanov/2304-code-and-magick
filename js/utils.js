'use strict';

window.utils = {
  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  getRandomElementExcept: function (arr, element) {
    var returnElement;

    while (!returnElement || returnElement === element) {
      returnElement = window.utils.getRandomElement(arr);
    }

    return returnElement;
  }
};
