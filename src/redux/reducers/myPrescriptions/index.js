const initialState = {
    myPrescriptions: []
  };
  
  export const myPrescriptions = (state = initialState, action) => {
    switch (action.type) {
      case 'myPrescriptions': {
        // console.log(action.payload)
        return { ...state,myPrescriptions:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default myPrescriptions;