import axios from 'axios';
export const selectAddress = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/select_address_for_order")
      .then((response) => {
        dispatch({
          type: 'SELECTADDRESS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
