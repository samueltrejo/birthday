import firebase from 'firebase/app';

import auth from './components/auth';
import birthday from './components/birthday';

import apiKeys from './helpers/api-keys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.initAuth();
  birthday.initBirthday();
};

init();
