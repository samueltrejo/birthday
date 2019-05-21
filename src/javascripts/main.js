import auth from './components/auth';
import birthday from './components/birthday';

import '../styles/main.scss';

const init = () => {
  auth.initAuth();
  birthday.initBirthday();
};

init();
