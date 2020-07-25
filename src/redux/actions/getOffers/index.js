import axios from 'axios';
export const getOffers = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/get_offers")
      .then((response) => {
        dispatch({
          type: 'GETOFFERS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


