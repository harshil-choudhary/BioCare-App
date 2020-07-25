const initialState = {
    uploadPrescription: {}
  };
  
  export const uploadPrescription = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOADPRESCRIPTION': {
        // console.log(action.payload)
        return { ...state,uploadPrescription:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default uploadPrescription;