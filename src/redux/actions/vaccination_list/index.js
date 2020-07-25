import axios from 'axios';
export const vaccination_list = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/vaccination_list?token="+id)
      .then((response) => {
        dispatch({
          type: 'VACCINATION_LIST',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


