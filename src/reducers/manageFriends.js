export function manageFriends(state, action){
  
  let stateCopy = {...state };
  switch(action.type){
    case 'ADD_FRIEND':
      stateCopy.friends.push({ hometown: action.friend.hometown , id: action.friend.id ,name: action.friend.name})
      return stateCopy;
   case 'REMOVE_FRIEND':
    const result = stateCopy.friends.filter(friend => 
      friend.id !== action.id
     )
    stateCopy.friends = result;
      return stateCopy;
  
    default:
      return state
  }
}
