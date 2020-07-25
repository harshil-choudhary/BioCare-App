const initialState = {
  getProfile: {}
};

export const getProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'GETPROFILE': {
      // console.log(action.payload)
      return { ...state,getProfile:action.payload };
    }
    case 'PROFILEERROR': {
      console.log(action.payload)
      return { ...state,getProfile:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default getProfile;
