const initialState = {
    selectAddress: {}
  };
  
  export const selectAddress = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECTADDRESS': {
        // console.log(action.payload)
        return { ...state,selectAddress:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default selectAddress;
