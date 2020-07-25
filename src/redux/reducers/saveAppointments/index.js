const initialState = {
    saveAppointments: {}
  };
  
  export const saveAppointments = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVEAPPOINTMENTS': {
        console.log(action.payload)
        return { ...state,saveAppointments:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveAppointments;