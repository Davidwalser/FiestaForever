/* eslint-disable require-jsdoc */
import '../styles/style.scss';
import * as dogService from './dog.js';
import * as validationService from './validation.js';
console.log('Hello npm projects!');

if (document.title == 'Home') {
  const button = document.getElementById('registerbtn');
  button.addEventListener('click', validationService.validate);
}

if (document.title == 'Doggos') {
  const button = document.createElement('button');
  button.addEventListener('click', dogService.getDog);
  button.innerHTML = 'Get more Dogs';
  document.body.appendChild(button);
}

