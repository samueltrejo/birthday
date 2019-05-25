import axios from 'axios';
import apiKeys from '../api-keys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getBirthdayByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/birthdays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const birthdayResults = results.data;
      const birthdays = [];
      Object.keys(birthdayResults).forEach((birthdayId) => {
        birthdayResults[birthdayId].id = birthdayId;
        birthdays.push(birthdayResults[birthdayId]);
      });
      resolve(birthdays[0]);
    })
    .catch(error => reject(error));
});

export default { getBirthdayByUid };
