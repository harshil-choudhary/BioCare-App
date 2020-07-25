const initialState = {
    PrescriptionDetails: {}
  };
  
  export const PrescriptionDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'PrescriptionDetails': {
        // console.log(action.payload)
        return { ...state,PrescriptionDetails:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default PrescriptionDetails;