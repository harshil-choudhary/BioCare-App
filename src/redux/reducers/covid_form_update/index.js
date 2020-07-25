const initialState = {
    covid_form_update: {}
  };
  
  export const covid_form_update = (state = initialState, action) => {
    switch (action.type) {
      case 'covid_form_update': {
        // console.log(action.payload)
        return { ...state,covid_form_update:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default covid_form_update;