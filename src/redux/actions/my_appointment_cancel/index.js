import axios from 'axios';
export const my_appointment_cancel = (id, appointment_id) => {
  return async (dispatch, getState) => {
    await axios
    .post("http://backend.bionische.com/api/patient/my_appointments?token="+id+'&appointment_id='+appointment_id, {})
      .then((response) => {
          console.log(response)
        dispatch({
          type: 'my_appointment_cancel',
          payload: response.data.data
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
