import getCountry from './fetchCountries';
import countryCardTPL from '../templates/country-card.hbs';

const itemList = document.querySelector('.country-list');
const inputField = document.querySelector('.input-section-field');

itemList.addEventListener('click', eve => {
  getCountry(eve.target.innerText).then(resp => {
    itemList.innerHTML = countryCardTPL(resp.data);
    inputField.value = resp.data[0].name;
  });
});
