const initialState = {
    addToCart: {}
  };
  
  export const addToCart = (state = initialState, action) => {
    switch (action.type) {
      case 'addToCart': {
        // console.log(action.payload)
        return { ...state,addToCart:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default addToCart;