import axios from 'axios';
export const saveTestBooking = (data) => {
  return async (dispatch, getState) => {
    var url='http://backend.bionische.com/api/patient/save_test_booking?token='+data.token+'&patient_id='+data.patient_id+'&lab_id='+data.lab_id+'&is_walk_in='+data.is_walk_in+'&patient_name='+data.patient_name+'&patient_address='+data.patient_address+'&patient_email='+data.patient_email+'&patient_phone='+data.patient_phone+'&appointment_date='+data.appointment_date+'&appointment_time='+data.appointment_time1+'&tests='+data.tests+'&refer_by='+data.refer_by
    console.log("Booking URL is : "+ url)
    await axios
      .post(url, {})
      .then((response) => {
        dispatch({
          type: 'SAVETESTBOOKING',
          payload: response.data.data
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
