import axios from 'axios';
export const my_orders = (id, patient_id, filter) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/my_orders?token="+id+'&patient_id='+patient_id+filter
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
          // console.log(response)
        dispatch({
          type: 'MY_ORDERS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
