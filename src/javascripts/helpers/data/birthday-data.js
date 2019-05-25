import axios from 'axios';
import apiKeys from '../api-keys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getBirthdayByUid = uid => new Promise((resolve, reject) => {
  console.error(uid);
  axios.get(`${firebaseUrl}/birthdays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const birthdayResults = results.data;
      console.error(birthdayResults);
    })
    .catch(error => reject(error));
});

export default { getBirthdayByUid };
