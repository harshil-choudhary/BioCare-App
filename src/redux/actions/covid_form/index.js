import axios from 'axios';
export const covid_form = (id, patient_id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/get_covid_form?token="+id+'&patient_id='+patient_id
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'COVID_FORM',
          payload: JSON.stringify(response.data.data) 
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
