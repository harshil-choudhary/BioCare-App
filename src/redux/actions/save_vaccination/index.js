import axios from 'axios';
export const save_vaccination = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctors/clinic?token=5ef0468f64443&type=clinic&id="+id)
      .then((response) => {
        dispatch({
          type: 'SAVE_VACCINATION',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};