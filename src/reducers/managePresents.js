export function managePresents(state, action){
  
  switch(action.type){
    
    case 'INCREASE':
      let newState = { ...state };
      newState.numberOfPresents++;
      return newState;
    
    default:
      return state;
     
  }
  
}

