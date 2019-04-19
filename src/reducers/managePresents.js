export function managePresents(state ={
  numberOfPresents: 0,
  // the current state
},action) {
  switch(action.type){
  case 'INCREASE':
  return Object.assign ({}, state, {
    numberOfPresents: state.numberOfPresents + 1}
  );
  default:
  return state;
  // the action that is happening
};
}
