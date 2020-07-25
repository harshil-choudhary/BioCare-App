const initialState = {
  my_orders: []
};

export const my_orders = (state = initialState, action) => {
  switch (action.type) {
    case 'MY_ORDERS': {
      // console.log(action.payload)
      return { ...state,my_orders:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default my_orders;
