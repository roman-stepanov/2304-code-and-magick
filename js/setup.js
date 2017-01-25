'use strict';

var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');
var setupUserName = setupWindow.querySelector('.setup-user-name');

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');

var showSetup = function () {
  setupWindow.classList.remove('invisible');
};

var hideSetup = function () {
  setupWindow.classList.add('invisible');
};

var validationSetup = function () {
  setupUserName.required = true;
  setupUserName.maxLength = 50;
};

var getRandomColor = function (colors) {
  return colors[Math.floor(Math.random() * colors.length)];
};

var changeColorCoat = function () {
  var colorCoat = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  wizardCoat.style.fill = getRandomColor(colorCoat);
};

var changeColorEyes = function () {
  var colorEyes = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  wizardEyes.style.fill = getRandomColor(colorEyes);
};

var changeColorFireball = function () {
  var colorFireball = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  fireballWrap.style.backgroundColor = getRandomColor(colorFireball);
};

setupOpen.addEventListener('click', showSetup);
setupClose.addEventListener('click', hideSetup);
validationSetup();
wizardCoat.addEventListener('click', changeColorCoat);
wizardEyes.addEventListener('click', changeColorEyes);
fireballWrap.addEventListener('click', changeColorFireball);
