const initialState = {
    shareReport: {}
  };
  
  export const shareReport = (state = initialState, action) => {
    switch (action.type) {
      case 'SHAREREPORT': {
        // console.log(action.payload)
        return { ...state,shareReport:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default shareReport;