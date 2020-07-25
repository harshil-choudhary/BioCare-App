import axios from 'axios';
export const watchVideo = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctors/clinic?token=5ef0468f64443&type=clinic&id="+id)
      .then((response) => {
        dispatch({
          type: 'WATCHVIDEO',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};