const initialState = {
  my_payments: []
};

export const my_payments = (state = initialState, action) => {
  switch (action.type) {
    case 'MY_PAYMENTS': {
      // console.log(action.payload)
      return { ...state,my_payments:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default my_payments;
