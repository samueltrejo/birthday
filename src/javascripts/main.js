import firebase from 'firebase/app';

import auth from './components/auth';
import birthday from './components/birthday';
import nav from './components/nav-bar';
import authData from './helpers/data/auth-data';

import apiKeys from './helpers/api-keys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  nav.navbarEvents();
  authData.checkLoginStatus();
  auth.initAuth();
  birthday.initBirthday();
};

init();
