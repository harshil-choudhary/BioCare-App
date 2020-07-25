import axios from 'axios';
export const doctors = (token, city, category) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/doctors?token="+token+"&city="+city+"&category="+category;
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'DOCTORS',
          payload: response.data.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};