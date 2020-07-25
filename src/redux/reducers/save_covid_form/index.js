const initialState = {
    save_covid_form: {}
  };
  
  export const save_covid_form = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVECOVIDFORM': {
        console.log(action.payload)
        return { ...state,save_covid_form:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default save_covid_form;