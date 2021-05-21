import axios from 'axios';
import { BASE_URL } from './base-urls';

export default function countryCardBuild(searchQuery) {
  const temp = axios
    .get(`${BASE_URL.main}${searchQuery}`)
    .then(resp => {
      if (resp.status === 200) {
        return resp;
      }
    })
    .catch(err => err);
  return temp;
}
