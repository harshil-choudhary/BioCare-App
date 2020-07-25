const initialState = {
  get_available_time_slots: {}
};

export const get_available_time_slots = (state = initialState, action) => {
  switch (action.type) {
    case 'GETAVAILABLETIMESLOTS': {
      // console.log(action.payload)
      return { ...state,get_available_time_slots:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default get_available_time_slots;
