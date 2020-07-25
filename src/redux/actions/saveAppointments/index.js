import axios from 'axios';
export const saveAppointments = (data) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/doctor/save_appointments?token="+data.token+"&patient_id="+data.patient_id+'&doctor_id='+data.doctor_id+'&time='+data.slot+'&date='+data.date+'&clinic_id='+data.clinic_id+'&hospital_id='+data.hospital_id+'&appointment_type='+data.type
    console.log(url)
    await axios
      .post(url)
      .then((response) => {
        dispatch({
          type: 'SAVEAPPOINTMENTS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};