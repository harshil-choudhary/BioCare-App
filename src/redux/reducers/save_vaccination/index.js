const initialState = {
    save_vaccination: {}
  };
  
  export const save_vaccination = (state = initialState, action) => {
    switch (action.type) {
      case 'save_vaccination': {
        // console.log(action.payload)
        return { ...state,save_vaccination:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default save_vaccination;