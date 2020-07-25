const initialState = {
  get_available_dates: {}
};

export const get_available_dates = (state = initialState, action) => {
  switch (action.type) {
    case 'GETAVAILABLEDATES': {
      // console.log(action.payload)
      return { ...state,get_available_dates:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default get_available_dates;
