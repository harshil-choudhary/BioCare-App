const initialState = {
  uploaded_reports: {}
};

export const uploaded_reports = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOADED_REPORTS': {
      // console.log(action.payload)
      return { ...state,uploaded_reports:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default uploaded_reports;
