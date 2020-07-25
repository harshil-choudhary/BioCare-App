const initialState = {
    update_profile: {}
  };
  
  export const update_profile = (state = initialState, action) => {
    switch (action.type) {
      case 'update_profile': {
        // console.log(action.payload)
        return { ...state,update_profile:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default update_profile;