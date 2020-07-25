const initialState = {
  myAddress: []
};

export const myAddress = (state = initialState, action) => {
  switch (action.type) {
    case 'MYADDRESS': {
      // console.log(action.payload)
      return { ...state,myAddress:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default myAddress;
