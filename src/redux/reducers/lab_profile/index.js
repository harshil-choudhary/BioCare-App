const initialState = {
    lab_profile: {}
  };
  
  export const lab_profile = (state = initialState, action) => {
    switch (action.type) {
      case 'labProfile': {
        // console.log(action.payload)
        return { ...state,lab_profile:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default lab_profile;
