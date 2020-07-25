const initialState = {
    booked_test_list: {}
  };
  
  export const booked_test_list = (state = initialState, action) => {
    switch (action.type) {
      case 'booked_test_list': {
        // console.log(action.payload)
        return { ...state,booked_test_list:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default booked_test_list;