import axios from 'axios';
export const labs = (id) => {
  return async (dispatch, getState) => {
    console.log('hi')
    await axios
      .get("http://backend.bionische.com/api/patient/labs")
      .then((response) => {
        console.log(response)

        dispatch({
          type: 'Labs',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
