const initialState = {
    testList: []
  };
  
  export const testList = (state = initialState, action) => {
    switch (action.type) {
      case 'TESTLIST': {
        // console.log(action.payload)
        return { ...state,testList:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default testList;