import axios from 'axios';
export const getLocation = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/get_location")
      .then((response) => {
        dispatch({
          type: 'GETLOCATION',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


