const initialState = {
  getOffers: {}
};

export const getOffers = (state = initialState, action) => {
  switch (action.type) {
    case 'GETOFFERS': {
      // console.log(action.payload)
      return { ...state,getOffers:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default getOffers;
