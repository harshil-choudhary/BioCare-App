import axios from 'axios';
export const videoList = (id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/video_list?token="+id;
    console.log(url)
await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'VIDEOLIST',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
