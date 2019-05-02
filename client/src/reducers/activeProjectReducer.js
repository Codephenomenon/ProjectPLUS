const initState = {
  objectives: []
}

export default function(state = initState, action) {
  switch (action.type) {
    case 'ACTIVE_PROJECT':
      return {...action.payload};
    default:
      return state;
  }
}
