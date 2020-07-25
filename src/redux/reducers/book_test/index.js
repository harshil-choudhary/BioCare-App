const initialState = {
    book_test: {}
  };
  
  export const book_test = (state = initialState, action) => {
    switch (action.type) {
      case 'book_test': {
        // console.log(action.payload)
        return { ...state,book_test:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default book_test;