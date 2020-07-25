import axios from 'axios';
export const get_available_dates = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctor/get_available_dates")
      .then((response) => {
        dispatch({
          type: 'GETAVAILABLEDATES',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


