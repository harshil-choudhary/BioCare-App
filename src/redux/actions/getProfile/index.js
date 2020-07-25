import axios from 'axios';
export const getProfile = (id, patient_id) => {
  return async (dispatch, getState) => {
    var url = 'http://backend.bionische.com/api/patient/get_profile?token='+id+'&patient_id='+patient_id
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'GETPROFILE',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {

        // console.log(error);
        dispatch({
          type: 'PROFILEERROR',
          payload: error
          
        });
      });
  };
};


