const friendRsvps = (friends, rsvps) => friends.map((friend) => {
  const newFriend = friend;
  const specificRsvp = rsvps.find(rsvp => rsvp.friendId === friend.id);
  if (specificRsvp) {
    newFriend.rsvpId = specificRsvp.id;
    newFriend.statusId = specificRsvp.statusId;
  }
  return newFriend;
});

export default { friendRsvps };
