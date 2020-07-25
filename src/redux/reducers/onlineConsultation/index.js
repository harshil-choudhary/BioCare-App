const initialState = {
  onlineConsultation: []
};

export const onlineConsultation = (state = initialState, action) => {
  switch (action.type) {
    case 'ONLINECONSULTATION': {
      // console.log(action.payload)
      return { ...state,onlineConsultation:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default onlineConsultation;
