const initialState = {
    pharmacy_categories: []
  };
  
  export const pharmacy_categories = (state = initialState, action) => {
    switch (action.type) {
      case 'pharmacy_categories': {
        // console.log(action.payload)
        return { ...state,pharmacy_categories:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default pharmacy_categories;
