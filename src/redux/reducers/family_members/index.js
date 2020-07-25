const initialState = {
  family_members: []
};

export const family_members = (state = initialState, action) => {
  switch (action.type) {
    case 'FAMILY_MEMBERS': {
      // console.log(action.payload)
      return { ...state,family_members:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default family_members;
