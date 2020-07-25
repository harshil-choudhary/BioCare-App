const initialState = {
    saveAddress: {}
  };
  
  export const saveAddress = (state = initialState, action) => {
    switch (action.type) {
      case 'saveAddress': {
        // console.log(action.payload)
        return { ...state,saveAddress:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveAddress;