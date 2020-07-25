const initialState = {
    upload_report: {}
  };
  
  export const upload_report = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_REPORT': {
        // console.log(action.payload)
        return { ...state,upload_report:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default upload_report;
