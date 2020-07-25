import axios from 'axios';
export const myPrescriptions = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/my_prescriptions/"+id)
      .then((response) => {
        dispatch({
          type: 'myPrescriptions',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


