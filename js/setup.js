'use strict';

(function () {

  var setupWindow = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setupWindow.querySelector('.setup-close');
  var setupUserName = setupWindow.querySelector('.setup-user-name');

  var wizard = document.querySelector('#wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');

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

  var showSetup = function () {
    setupWindow.classList.remove('invisible');

    setupClose.addEventListener('click', closeSetupHandler);
    setupClose.addEventListener('keydown', closeSetupHandler);
    document.addEventListener('keydown', setupPressESC);

    wizardCoat.addEventListener('click', changeColorCoat);
    wizardCoat.addEventListener('keydown', changeColorCoat);
    wizardEyes.addEventListener('click', changeColorEyes);
    wizardEyes.addEventListener('keydown', changeColorEyes);
    fireballWrap.addEventListener('click', changeColorFireball);
    fireballWrap.addEventListener('keydown', changeColorFireball);

    setupOpen.setAttribute('aria-pressed', 'true');
  };

  var closeSetup = function (callback) {
    setupWindow.classList.add('invisible');

    setupClose.removeEventListener('click', closeSetupHandler);
    setupClose.removeEventListener('keydown', closeSetupHandler);
    document.removeEventListener('keydown', setupPressESC);

    wizardCoat.removeEventListener('click', changeColorCoat);
    wizardCoat.removeEventListener('keydown', changeColorCoat);
    wizardEyes.removeEventListener('click', changeColorEyes);
    wizardEyes.removeEventListener('keydown', changeColorEyes);
    fireballWrap.removeEventListener('click', changeColorFireball);
    fireballWrap.removeEventListener('keydown', changeColorFireball);

    setupOpen.setAttribute('aria-pressed', 'false');

    if (typeof callback === 'function') {
      callback();
    }
  };

  var isActivationEvent = function (evt) {
    return evt.type === 'click' || window.evtPressKey.isPressENTER(evt);
  };

  var showSetupHandler = function (evt) {
    if (isActivationEvent(evt)) {
      showSetup();
    }
  };

  var callbackCloseSetup = function (evt) {
    if (evt.type === 'keydown') {
      setupOpen.focus();
    }
  };

  var closeSetupHandler = function (evt) {
    if (isActivationEvent(evt)) {
      closeSetup(callbackCloseSetup(evt));
    }
  };

  var setupPressESC = function (evt) {
    if (!setupWindow.classList.contains('invisible') && window.evtPressKey.isPressESC(evt)) {
      closeSetup(callbackCloseSetup(evt));
    }
  };

  var callbackColorizeElement = function (element, color, property) {
    element.style[property] = color;
  };

  var changeColorCoat = function (evt) {
    if (isActivationEvent(evt)) {
      window.colorizeElement(wizardCoat, colorCoat, 'fill', callbackColorizeElement);
    }
  };

  var changeColorEyes = function (evt) {
    if (isActivationEvent(evt)) {
      window.colorizeElement(wizardEyes, colorEyes, 'fill', callbackColorizeElement);
    }
  };

  var changeColorFireball = function (evt) {
    if (isActivationEvent(evt)) {
      window.colorizeElement(fireballWrap, colorFireball, 'backgroundColor', callbackColorizeElement);
    }
  };

  var validationSetup = function () {
    setupUserName.required = true;
    setupUserName.maxLength = 50;
  };

  setupOpen.addEventListener('click', showSetupHandler);
  setupOpen.addEventListener('keydown', showSetupHandler);
  validationSetup();
})();
