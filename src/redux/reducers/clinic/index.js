const initialState = {
    clinic: {}
  };
  
  export const clinic = (state = initialState, action) => {
    switch (action.type) {
      case 'Clinic': {
        // console.log(action.payload)
        return { ...state,clinic:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default clinic;