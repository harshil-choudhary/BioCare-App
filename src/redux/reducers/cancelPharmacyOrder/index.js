const initialState = {
    cancelPharmacyOrder: {}
  };
  
  export const cancelPharmacyOrder = (state = initialState, action) => {
    switch (action.type) {
      case 'cancelPharmacyOrder': {
        // console.log(action.payload)
        return { ...state,cancelPharmacyOrder:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default cancelPharmacyOrder;