const initialState = {
    doctorAvailableDates: {}
  };
  
  export const doctorAvailableDates = (state = initialState, action) => {
    switch (action.type) {
      case 'doctorAvailableDates': {
        // console.log(action.payload)
        return { ...state,doctorAvailableDates:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default doctorAvailableDates;