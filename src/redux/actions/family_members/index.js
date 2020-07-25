import axios from 'axios';
export const family_members = (id) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/family_members?token="+id;
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: 'FAMILY_MEMBERS',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


