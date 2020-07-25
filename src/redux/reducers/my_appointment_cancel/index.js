const initialState = {
  my_appointment_cancel: {}
};

export const my_appointment_cancel = (state = initialState, action) => {
  switch (action.type) {
    case 'my_appointment_cancel': {
      // console.log(action.payload)
      return { ...state,my_appointment_cancel:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default my_appointment_cancel;
