import axios from 'axios';
export const my_payments = (token, patient_id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/my_payments?token="+token+'&patient_id='+patient_id
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'MY_PAYMENTS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


