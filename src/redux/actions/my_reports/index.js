import axios from 'axios';
export const my_reports = (id, patient_id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/my_reports?token="+id+'&patient_id='+patient_id
    console.log ("URL is : " + url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'MY_REPORTS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


