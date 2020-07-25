import axios from 'axios';
export const uploaded_reports = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/uploaded_report_list")
      .then((response) => {
        dispatch({
          type: 'UPLOADED_REPORTS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


