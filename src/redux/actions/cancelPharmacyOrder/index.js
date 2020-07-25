import axios from 'axios';
export const cancelPharmacyOrder = (token, patient_id, id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/pharmacy/cancel?token="+token+"&patient_id="+patient_id+"&order_id="+id
    console.log(url)
    await axios
      .post(url)
      .then((response) => {
        dispatch({
          type: 'cancelPharmacyOrder',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};