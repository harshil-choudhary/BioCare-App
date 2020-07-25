const initialState = {
  vaccination_list: {}
};

export const vaccination_list = (state = initialState, action) => {
  switch (action.type) {
    case 'VACCINATION_LIST': {
      // console.log(action.payload)
      return { ...state,vaccination_list:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default vaccination_list;
