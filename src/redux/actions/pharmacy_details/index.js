import axios from 'axios';
export const pharmacy_details = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/pharmacies/profile?pharmacy_id="+id)
      .then((response) => {
        dispatch({
          type: 'PHARMACY_DETAILS',
          payload: response.data.data
          
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};