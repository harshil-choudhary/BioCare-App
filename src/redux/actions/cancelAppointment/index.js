import axios from 'axios';
export const cancelAppointment = (token, patient_id, apppointment_id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/doctor/cancel_appointments?token="+token+"&appointment_id="+apppointment_id+"&patient_id="+patient_id
    console.log(url)
    await axios
      .post(url)
      .then((response) => {
        dispatch({
          type: 'CANCELAPPOINTMENT',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};