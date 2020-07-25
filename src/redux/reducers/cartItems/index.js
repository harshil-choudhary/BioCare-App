const initialState = {
    cartItems: {}
  };
  
  export const cartItems = (state = initialState, action) => {
    switch (action.type) {
      case 'cartItems': {
        // console.log(action.payload)
        return { ...state,cartItems:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default cartItems;