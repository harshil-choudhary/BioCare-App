const initialState = {
    saveOrder: {}
  };
  
  export const saveOrder = (state = initialState, action) => {
    switch (action.type) {
      case 'saveOrder': {
        // console.log(action.payload)
        return { ...state,saveOrder:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveOrder;