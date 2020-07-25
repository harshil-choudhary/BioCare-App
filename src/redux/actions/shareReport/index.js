import axios from 'axios';
export const shareReport = (token, doctor_id, report_id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/lab/share_report?token="+id+"&doctor_id="+doctor_id+"&report_id="+report_id
    console.log(url)
    await axios
      .post(url)
      .then((response) => {
        dispatch({
          type: 'SHAREREPORT',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};