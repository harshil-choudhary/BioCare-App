const initialState = {
    saveTestBooking: {}
  };
  
  export const saveTestBooking = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVETESTBOOKING': {
        // console.log(action.payload)
        return { ...state,saveTestBooking:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveTestBooking;