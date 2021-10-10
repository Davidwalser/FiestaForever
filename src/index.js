/* eslint-disable require-jsdoc */
import './styles/style.scss';
import * as dogService from './dog.js';
console.log('Hello npm projects!');

if (document.getElementById('dogList') != null) {
  const button = document.createElement('button');
  button.addEventListener('click', dogService.getDog);
  button.innerHTML = 'Get more Dogs';
  document.body.appendChild(button);
}
