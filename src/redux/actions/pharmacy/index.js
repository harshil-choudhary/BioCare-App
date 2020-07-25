import axios from 'axios';
export const pharmacy = (city, filter) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/pharmacies?city="+city+filter
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        console.log(response)

        dispatch({
          type: 'PHARMACY',
          payload: response.data.data          
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};