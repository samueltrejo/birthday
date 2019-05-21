import firebase from 'firebase/app';
import 'firebase/auth';

import print from '../helpers/print';

import googleImg from './google.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<button id="google-auth" class="btn btn-dark">';
  domString += `<img src=${googleImg} />`;
  domString += '</button>';
  print.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

const initAuth = () => {
  domStringBuilder();
};

export default { initAuth };
