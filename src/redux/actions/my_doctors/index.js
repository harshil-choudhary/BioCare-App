import axios from 'axios';
export const my_doctors = (id, patient_id, filter1) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/my_doctors?token="+id+'&patient_id='+patient_id+filter1
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'MY_DOCTORS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
