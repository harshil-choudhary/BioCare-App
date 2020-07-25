import axios from 'axios';
export const my_appointments = (id, patient_id, filter) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/my_appointments?token="+id+"&patient_id="+patient_id+filter)
      .then((response) => {
          console.log(response)
        dispatch({
          type: 'MY_APPOINTMENTS',
          payload: response.data.data
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
