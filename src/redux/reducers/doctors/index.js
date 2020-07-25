const initialState = {
    doctors: []
  };
  
  export const doctors = (state = initialState, action) => {
    switch (action.type) {
      case 'DOCTORS': {
        console.log(action.payload)
        return { ...state,doctors:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default doctors;