const initialState = {
  getLocation: {}
};

export const getLocation = (state = initialState, action) => {
  switch (action.type) {
    case 'GETLOCATION': {
      // console.log(action.payload)
      return { ...state,getLocation:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default getLocation;
