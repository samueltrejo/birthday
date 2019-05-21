import print from '../helpers/print';

const domStringBuilder = () => {
  let domString = '';
  domString += '<h3>Birthday</h3>';
  print.printToDom('birthday', domString);
};

const initBirthday = () => {
  domStringBuilder();
};

export default { initBirthday };
