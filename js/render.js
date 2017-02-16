'use strict';

window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard');

  var replaceID = function (element) {
    if (element.nodeType === 1) {
      var child = element.firstChild;
      while (child) {
        if (child.nodeType === 1) {
          if (child.hasAttribute('id')) {
            child.setAttribute('class', child.getAttribute('id'));
            child.removeAttribute('id');
          }
          replaceID(child);
        }
        child = child.nextSibling;
      }
    }
  };

  return function (wizard) {
    var cloneWizard = wizardTemplate.cloneNode(true);
    var cloneWizardCoat = cloneWizard.querySelector('#wizard-coat');
    var cloneWizardEyes = cloneWizard.querySelector('#wizard-eyes');

    cloneWizard.style.position = 'static';
    cloneWizard.style.width = '50px';
    cloneWizard.style.height = '50px';

    replaceID(cloneWizard);

    cloneWizardCoat.style.fill = wizard.colorCoat;
    cloneWizardEyes.style.fill = wizard.colorEyes;
    cloneWizard.setAttribute('title', wizard.name);

    cloneWizardCoat.removeAttribute('role');
    cloneWizardCoat.removeAttribute('aria-pressed');
    cloneWizardCoat.removeAttribute('tabindex');
    cloneWizardEyes.removeAttribute('role');
    cloneWizardEyes.removeAttribute('aria-pressed');
    cloneWizardEyes.removeAttribute('tabindex');

    return cloneWizard;
  };
})();
