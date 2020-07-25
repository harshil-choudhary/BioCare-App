const initialState = {
    pharmacy: {}
  };
  
  export const pharmacy = (state = initialState, action) => {
    switch (action.type) {
      case 'PHARMACY': {
        // console.log(action.payload)
        return { ...state,pharmacy:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default pharmacy;