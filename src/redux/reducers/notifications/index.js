const initialState = {
    notifications: []
  };
  
  export const notifications = (state = initialState, action) => {
    switch (action.type) {
      case 'NOTIFICATIONS': {
        // console.log(action.payload)
        return { ...state,notifications:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default notifications;
