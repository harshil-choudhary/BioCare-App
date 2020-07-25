const initialState = {
  lab_bookings: []
};

export const lab_bookings = (state = initialState, action) => {
  switch (action.type) {
    case 'lab_bookings': {
      // console.log(action.payload)
      return { ...state,lab_bookings:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default lab_bookings;
