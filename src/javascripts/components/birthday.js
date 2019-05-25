import print from '../helpers/print';
import birthdayData from '../helpers/data/birthday-data';

const domStringBuilder = () => {
  let domString = '';
  domString += '<h3>Birthday</h3>';
  print.printToDom('event', domString);
};

const initBirthday = (uid) => {
  console.error(uid);
  birthdayData.getBirthdayByUid(uid)
    .then((response) => {
      console.error(response);
      domStringBuilder();
    })
    .catch(error => console.error(error));
};

export default { initBirthday };
