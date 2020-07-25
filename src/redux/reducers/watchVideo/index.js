const initialState = {
    watchVideo: {}
  };
  
  export const watchVideo = (state = initialState, action) => {
    switch (action.type) {
      case 'watchVideo': {
        // console.log(action.payload)
        return { ...state,watchVideo:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default watchVideo;