import axios from 'axios';
export const cancelLabBooking = (token, patient_id, id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/lab/cancel?token="+token+"&patient_id="+patient_id+"&appointment_id="+id
    console.log(url)
    await axios
      .post(url)
      .then((response) => {
        dispatch({
          type: 'cancelLabBooking',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};