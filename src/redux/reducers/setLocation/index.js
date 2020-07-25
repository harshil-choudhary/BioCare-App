const initialState = {
    setLocation: {}
  };
  
  export const setLocation = (state = initialState, action) => {
    switch (action.type) {
      case 'setLocation': {
        // console.log(action.payload)
        return { ...state,setLocation:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default setLocation;