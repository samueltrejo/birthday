import firebase from 'firebase/app';

import auth from './components/auth';
import nav from './components/nav-bar';
import authData from './helpers/data/auth-data';

import apiKeys from './helpers/api-keys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  nav.navbarEvents();
  authData.checkLoginStatus();
  auth.initAuth();
};

init();
