const initialState = {
  my_appointments: []
};

export const my_appointments = (state = initialState, action) => {
  switch (action.type) {
    case 'MY_APPOINTMENTS': {
      // console.log(action.payload)
      return { ...state,my_appointments:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default my_appointments;
