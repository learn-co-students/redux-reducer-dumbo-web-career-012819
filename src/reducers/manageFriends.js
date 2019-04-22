export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND' :
      let newFriend = action.friend;
      let newFriendArray = [...state.friends, newFriend];
          return {...state, friends:newFriendArray};

    case 'REMOVE_FRIEND' :
      let id = action.id;
      let filteredArray= state.friends.filter(friend => friend.id !== id);
      return {...state, friends: filteredArray};

    default:
      return state
  }
}
