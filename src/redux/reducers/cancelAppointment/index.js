const initialState = {
    cancelAppointment: {}
  };
  
  export const cancelAppointment = (state = initialState, action) => {
    switch (action.type) {
      case 'CANCELAPPOINTMENT': {
        // console.log(action.payload)
        return { ...state,addToCart:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default cancelAppointment;