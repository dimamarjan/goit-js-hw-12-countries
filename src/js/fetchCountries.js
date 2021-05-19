import axios from 'axios';
import { BASE_URL } from './base-urls';

export default function countryCardBuild(searchQuery) {
  const temp = axios
    .get(`${BASE_URL.main}${searchQuery}`)
    .then(resp => resp)
    .catch(err => console.log(err));
  return temp;
}
