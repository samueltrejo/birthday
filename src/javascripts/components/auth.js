import print from '../helpers/print';

const domStringBuilder = () => {
  let domString = '';
  domString += '<h3>Auth</h3>';
  print.printToDom('auth', domString);
};

const initAuth = () => {
  domStringBuilder();
};

export default { initAuth };
