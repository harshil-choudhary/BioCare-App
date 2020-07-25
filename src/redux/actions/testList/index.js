import axios from 'axios';
export const testList = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/test_list")
      .then((response) => {
        dispatch({
          type: 'TESTLIST',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};