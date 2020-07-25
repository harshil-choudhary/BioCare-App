import axios from 'axios';
export const clinic = (id, token) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctors/clinic?token="+token+"&type=clinic&id="+id)
      .then((response) => {
        dispatch({
          type: 'CLINIC',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};