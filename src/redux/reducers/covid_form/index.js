const initialState = {
  covid_form: {}
};

export const covid_form = (state = initialState, action) => {
  switch (action.type) {
    case 'COVID_FORM': {
      // console.log(action.payload)
      return { ...state,covid_form:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default covid_form;
