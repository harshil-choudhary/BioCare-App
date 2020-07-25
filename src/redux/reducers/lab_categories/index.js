const initialState = {
    lab_categories: {}
  };
  
  export const lab_categories = (state = initialState, action) => {
    switch (action.type) {
      case 'lab_categories': {
        // console.log(action.payload)
        return { ...state,lab_categories:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default lab_categories;
