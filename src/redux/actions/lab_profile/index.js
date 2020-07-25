import axios from 'axios';
export const lab_profile = (id) => {
  return async (dispatch, getState) => {
    console.log('hi')
    console.log(id)
    await axios
      .get("http://backend.bionische.com/api/patient/labs/profile?lab_id="+id)
      .then((response) => {
        console.log(response)

        dispatch({
          type: 'PHARMACY_DETAILS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
