import axios from 'axios';
export const past_history = (token, patient_id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/past_history?token="+token+'&patient_id='+patient_id
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'PAST_HISTORY',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


