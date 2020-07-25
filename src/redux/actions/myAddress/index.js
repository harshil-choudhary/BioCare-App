import axios from 'axios';
export const myAddress = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/my_address")
      .then((response) => {
        dispatch({
          type: 'MYADDRESS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


