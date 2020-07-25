import axios from 'axios';
export const get_available_time_slots = (doctor_id, location_id, type, date) => {
  var url = "http://backend.bionische.com/api/patient/doctor/timings?doctor_id="+doctor_id+'&location_id='+location_id+'&type='+type+'&date='+date
  console.log(url)
  return async (dispatch, getState) => {
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'GETAVAILABLETIMESLOTS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


