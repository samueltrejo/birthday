import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import print from '../helpers/print';
import friendsData from '../helpers/data/friends-data';
import birthdayData from '../helpers/data/birthday-data';
import rsvpData from '../helpers/data/rsvp-data';
import smash from '../helpers/smash';

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
      getFriends(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(error => console.error(error));
};

const newFriend = () => {
  document.getElementById('birthday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const deleteFriend = (event) => {
  const friendId = event.target.id;
  friendsData.deleteFriend(friendId)
    .then(() => getFriends(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
    .catch(error => console.error(error));
};

const radioButtonEvent = (event) => {
  const rsvpId = event.target.closest('td').id;
  const rsvp = {
    birthdayId: event.target.closest('table').id,
    friendId: event.target.id.split('.')[1],
    statusId: event.target.value,
  };
  if (rsvpId) {
    rsvpData.editRsvp(rsvpId, rsvp)
      .then(() => getFriends(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
      .catch(error => console.error(error));
  } else {
    rsvpData.addRsvp(rsvp)
      .then(() => getFriends(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
      .catch(error => console.error(error));
  }
};

const attachEvents = () => {
  document.getElementById('add-friend').addEventListener('click', newFriend);
  $('.delete-friend').click(deleteFriend);
  $('.radio').click(radioButtonEvent);
};

const showFriends = (friends, birthdayId) => {
  let domString = '<div class="col-6 offset-3">';
  domString += '<h2>Friends</h2>';
  domString += '<button id="add-friend" class="btn btn-dark">Add Friend</button>';
  domString += `<table id=${birthdayId} class="table table-striped"`;
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Name</th>';
  domString += '<th scope="col">Email</th>';
  domString += '<th scope="col">RSVP</th>';
  domString += '<th scope="col"></th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  friends.forEach((friend) => {
    domString += '<tr>';
    domString += `<td>${friend.name}</td>`;
    domString += `<td>${friend.email}</td>`;
    domString += `<td id=${friend.rsvpId}>`;
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio1.${friend.id}" name="radios.${friend.id}" class="custom-control-input radio" value="status2" ${friend.statusId === 'status2' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio1.${friend.id}">Yes</label>`;
    domString += '</div>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio2.${friend.id}" name="radios.${friend.id}" class="custom-control-input radio" value="status3" ${friend.statusId === 'status3' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio2.${friend.id}">No</label>`;
    domString += '</div>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio3.${friend.id}" name="radios.${friend.id}" class="custom-control-input radio" value="status1" ${friend.statusId === 'status1' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio3.${friend.id}">Unkown</label>`;
    domString += '</div>';
    domString += '</td>';
    domString += `<th scope="col"><button id=${friend.id} class="btn btn-danger delete-friend">X</button></th>`;
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  domString += '</div>';
  print.printToDom('friends', domString);
  attachEvents();
};

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      birthdayData.getBirthdayByUid(uid).then((birthday) => {
        rsvpData.getRsvpsByBirthdayId(birthday.id).then((rsvps) => {
          const finalFriends = smash.friendRsvps(friends, rsvps);
          showFriends(finalFriends, birthday.id);
        });
      });
    })
    .catch(error => console.error(error));
};

export default { getFriends };
