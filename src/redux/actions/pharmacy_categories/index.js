import axios from 'axios';
export const pharmacy_categories = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/pharmacy_categories")
      .then((response) => {
        console.log(response)

        dispatch({
          type: 'pharmacy_categories',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
