const initialState = {
    my_doctors: []
  };
  
  export const my_doctors = (state = initialState, action) => {
    switch (action.type) {
      case 'MY_DOCTORS': {
        // console.log(action.payload)
        return { ...state,my_doctors:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default my_doctors;
