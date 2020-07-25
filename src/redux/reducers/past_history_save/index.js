const initialState = {
    past_history_save: {}
  };
  
  export const past_history_save = (state = initialState, action) => {
    switch (action.type) {
      case 'PAST_HISTORY_SAVE': {
        // console.log(action.payload)
        return { ...state,past_history_save:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default past_history_save;