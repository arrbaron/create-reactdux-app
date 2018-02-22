const initialState = {
  title: 'Welcome to React Redux',
  intro: 'To get started, edit src/App.js and save to reload.',
  count: 0
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default reducer;