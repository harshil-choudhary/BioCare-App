import axios from 'axios';
export const lab_bookings = (id, patient_id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/lab_appointments?token="+id+'&patient_id='+patient_id
    console.log ("URL is : " + url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'lab_bookings',
          payload: response.data.data
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


