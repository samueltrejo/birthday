import firebase from 'firebase/app';
import 'firebase/auth';

import print from '../helpers/print';
import friendsData from '../helpers/data/friends-data';

const createNewFriend = (event) => {
  event.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birthday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
    })
    .catch(error => console.error(error));
};

const newFriend = () => {
  document.getElementById('birthday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = () => {
  const domString = '<button id="add-friend" class="btn btn-dark">Add Friend</button>';
  print.printToDom('friends', domString);
  document.getElementById('add-friend').addEventListener('click', newFriend);
};

export default { showFriends };
