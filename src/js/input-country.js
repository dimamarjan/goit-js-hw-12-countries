import debounce from 'lodash.debounce';
import countryCardBuild from './fetchCountries';
import countruListTPL from '../templates/country-list.hbs';
import countryCardTPL from '../templates/country-card.hbs';
import alertMessage from './alert-message';

const inputField = document.querySelector('.input-section-field');
const countrySection = document.querySelector('.country-list');

inputField.addEventListener(
  'input',
  debounce(() => {
    const texFromInput = inputField.value;
    countryCardBuild(texFromInput)
      .then(resp => {
        if (resp.data.length < 11) {
          countrySection.innerHTML = countruListTPL(resp.data);
        }
        if (resp.data.length === 1) {
          countrySection.innerHTML = countryCardTPL(resp.data);
        }
        if (resp.data.length > 10) {
          countrySection.innerHTML = '';
          alertMessage('info', 'Too many matches...');
        }
      })
      .catch(err => {
        console.log(err);
        alertMessage('error', 'There is no matches...');
      });
  }, 500),
);
