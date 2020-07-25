const initialState = {
    pharmacy_details: {}
  };
  
  export const pharmacy_details = (state = initialState, action) => {
    switch (action.type) {
      case 'PHARMACY_DETAILS': {
        // console.log(action.payload)
        return { ...state,pharmacy_details:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default pharmacy_details;