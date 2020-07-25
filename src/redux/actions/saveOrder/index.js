import axios from 'axios';
export const saveOrder = (data, file) => {
  return async (dispatch, getState) => {
    const formdata = new FormData();
    formdata.append('file', file);
    var url = 'http://backend.bionische.com/api/patient/save_order?token='+data.token+'&patient_id='+data.patient_id+'&address='+data.address+'&delivery_type='+data.delivery_type+'&contact_no='+data.contact_no+'&order_items='+data.order_items+'&pharmacy_id='+data.pharmacy_id+'&prescription_type=1&doctor_name='+data.doctor_name
    console.log(url)
    await axios
      .post(url,formdata)
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: 'saveOrder',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        throw error;
      });
  }
};


