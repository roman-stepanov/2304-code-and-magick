'use strict';

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

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

  setupClose.addEventListener('click', closeSetup);
  setupClose.addEventListener('keydown', keydownSetupCloseENTER);
  document.addEventListener('keydown', keydownSetupCloseESC);

  setupOpen.setAttribute('aria-pressed', 'true');
};

var closeSetup = function () {
  setupWindow.classList.add('invisible');

  setupClose.removeEventListener('click', closeSetup);
  setupClose.removeEventListener('keydown', keydownSetupCloseENTER);
  document.removeEventListener('keydown', keydownSetupCloseESC);

  setupOpen.setAttribute('aria-pressed', 'false');
};

var isPressENTER = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var isPressESC = function (evt) {
  return evt.keyCode && evt.keyCode === ESC_KEY_CODE;
};

var keydownSetupOpen = function (evt) {
  if (isPressENTER(evt)) {
    showSetup();
  }
};

var keydownSetupCloseENTER = function (evt) {
  if (isPressENTER(evt)) {
    closeSetup();
  }
};

var keydownSetupCloseESC = function (evt) {
  if (isPressESC(evt)) {
    closeSetup();
  }
};

var validationSetup = function () {
  setupUserName.required = true;
  setupUserName.maxLength = 50;
};

var colorCoat = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];


var colorEyes = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var colorFireball = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupOpen.addEventListener('click', showSetup);
setupOpen.addEventListener('keydown', keydownSetupOpen);
validationSetup();
window.colorizeElement(wizardCoat, colorCoat, 'fill');
window.colorizeElement(wizardEyes, colorEyes, 'fill');
window.colorizeElement(fireballWrap, colorFireball, 'backgroundColor');
