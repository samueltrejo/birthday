import axios from 'axios';
import apiKeys from '../api-keys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewFriend = friend => axios.post(`${firebaseUrl}/friends.json`, friend);

export default { addNewFriend };
