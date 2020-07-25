const initialState = {
    cancelLabBooking: {}
  };
  
  export const cancelLabBooking = (state = initialState, action) => {
    switch (action.type) {
      case 'cancelLabBooking': {
        // console.log(action.payload)
        return { ...state,cancelLabBooking:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default cancelLabBooking;