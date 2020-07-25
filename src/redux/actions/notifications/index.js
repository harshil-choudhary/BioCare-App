import axios from 'axios';
export const notifications = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/notifications")
      .then((response) => {
        dispatch({
          type: 'NOTIFICATIONS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
