const initialState = {
  past_history: {}
};

export const past_history = (state = initialState, action) => {
  switch (action.type) {
    case 'PAST_HISTORY': {
      // console.log(action.payload)
      return { ...state,past_history:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default past_history;
