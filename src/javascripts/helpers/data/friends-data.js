import axios from 'axios';
import apiKeys from '../api-keys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendsResults = results.data;
      const friends = [];
      Object.keys(friendsResults).forEach((friendsId) => {
        friendsResults[friendsId].id = friendsId;
        friends.push(friendsResults[friendsId]);
      });
      resolve(friends);
    })
    .catch(error => reject(error));
});

const deleteFriend = friendId => axios.delete(`${firebaseUrl}/friends/${friendId}.json`);

const addNewFriend = friend => axios.post(`${firebaseUrl}/friends.json`, friend);

export default { addNewFriend, getFriendsByUid, deleteFriend };
