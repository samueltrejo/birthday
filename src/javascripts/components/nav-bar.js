import firebase from 'firebase/app';
import 'firebase/auth';

// import $ from 'jquery';

const navbarEvents = () => {
  // $('nav-link').click();
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', (event) => {
      if (event.target.id === 'navbar-button-logout') {
        firebase.auth().signOut();
      }
    });
  }
};

export default { navbarEvents };
