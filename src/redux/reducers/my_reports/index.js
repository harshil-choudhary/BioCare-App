const initialState = {
  my_reports: []
};

export const my_reports = (state = initialState, action) => {
  switch (action.type) {
    case 'MY_REPORTS': {
      // console.log(action.payload)
      return { ...state,my_reports:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default my_reports;
