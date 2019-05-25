import print from '../helpers/print';
import birthdayData from '../helpers/data/birthday-data';

const domStringBuilder = (birthday) => {
  let domString = '';
  domString += `<h3>${birthday.date}</h3>`;
  domString += `<img src=${birthday.imageUrl}>`;
  domString += `<h4>${birthday.location} @ ${birthday.time}</h4>`;
  print.printToDom('event', domString);
};

const initBirthday = (uid) => {
  console.error(uid);
  birthdayData.getBirthdayByUid(uid)
    .then((response) => {
      console.error(response);
      domStringBuilder(response);
    })
    .catch(error => console.error(error));
};

export default { initBirthday };
