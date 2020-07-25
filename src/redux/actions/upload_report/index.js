import axios from 'axios';
export const upload_report = (data) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/upload_report_list"
    console.log(url)
    await axios
      .post(url , data)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'UPLOAD_REPORT',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
