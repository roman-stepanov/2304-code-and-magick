'use strict';

window.setup = (function () {

  var setupWindow = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
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

    setupOpen.setAttribute('aria-pressed', 'true');
  };

  var closeSetup = function () {
    setupWindow.classList.add('invisible');

    setupClose.removeEventListener('click', closeSetupHandler);
    setupClose.removeEventListener('keydown', closeSetupHandler);
    document.removeEventListener('keydown', setupPressESC);

    setupOpen.setAttribute('aria-pressed', 'false');
  };

  var showSetupHandler = function (evt) {
    if (evt.type === 'click' || window.evtPressKey.isPressENTER(evt)) {
      showSetup();
    }
  };

  var closeSetupHandler = function (evt) {
    if (evt.type === 'click' || window.evtPressKey.isPressENTER(evt)) {
      closeSetup();
    }
  };

  var setupPressESC = function (evt) {
    if (!setupWindow.classList.contains('invisible') && window.evtPressKey.isPressESC(evt)) {
      closeSetup();
    }
  };

  var validationSetup = function () {
    setupUserName.required = true;
    setupUserName.maxLength = 50;
  };

  setupOpen.addEventListener('click', showSetupHandler);
  setupOpen.addEventListener('keydown', showSetupHandler);
  validationSetup();
  window.colorizeElement(wizardCoat, colorCoat, 'fill');
  window.colorizeElement(wizardEyes, colorEyes, 'fill');
  window.colorizeElement(fireballWrap, colorFireball, 'backgroundColor');
})();
