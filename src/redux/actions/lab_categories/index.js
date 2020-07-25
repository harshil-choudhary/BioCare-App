import axios from 'axios';
export const lab_categories = (id) => {
  return async (dispatch, getState) => {
    console.log('hi')
    await axios
      .get("http://backend.bionische.com/api/patient/lab_categories")
      .then((response) => {
        console.log(response)

        dispatch({
          type: 'lab_categories',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
