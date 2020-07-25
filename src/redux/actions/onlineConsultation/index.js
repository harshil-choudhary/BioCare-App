import axios from 'axios';
export const onlineConsultation = (id, patient_id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctor/online_consultation?token="+id+'&patient_id='+patient_id)
      .then((response) => {
          console.log(response)
        dispatch({
          type: 'ONLINECONSULTATION',
          payload: response.data.data
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
