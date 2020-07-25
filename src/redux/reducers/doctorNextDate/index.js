const initialState = {
    doctorNextDate: {}
  };
  
  export const doctorNextDate = (state = initialState, action) => {
    switch (action.type) {
      case 'doctorNextDate': {
        // console.log(action.payload)
        return { ...state,doctorNextDate:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default doctorNextDate;