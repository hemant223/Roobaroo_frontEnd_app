const initialState = {
  location: '',
};

export default function RootReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'LOCATION':
      //   console.log('locationaction', actions);
      state.location = actions.payload;
      console.log("location state",state.location);
      return state.location;
    default:
      return state 
  }
}
