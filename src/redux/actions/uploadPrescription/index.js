import axios from 'axios';
export const uploadPrescription = (token, image, pharmacy_id) => {
  return async (dispatch, getState) => {
    await axios
      .post("http://backend.bionische.com/api/patient/upload_report_list", {token:token, prescription:image, pharmacy_id:pharmacy_id})
      .then((response) => {
        dispatch({
          type: 'UPLOADPRESCRIPTION',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};