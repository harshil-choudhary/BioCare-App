const initialState = {
    labs: {}
  };
  
  export const labs1 = (state = initialState, action) => {
    switch (action.type) {
      case 'Labs': {
        // console.log(action.payload)
        return { ...state,labs:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default labs1;