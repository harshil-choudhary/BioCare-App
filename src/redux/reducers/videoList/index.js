const initialState = {
    videoList: []
  };
  
  export const videoList = (state = initialState, action) => {
    switch (action.type) {
      case 'VIDEOLIST': {
        // console.log(action.payload)
        return { ...state,videoList:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default videoList;
