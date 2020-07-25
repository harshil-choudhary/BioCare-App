import axios from 'axios';
export const add_family_member = (data) => {
  return async (dispatch, getState) => {
    var url = "http://backend.bionische.com/api/patient/add_family_members?token="+data.token+"&name="+data.name+'&email='+data.email+'&dob='+data.dob+'&blood_group='+data.blood_group+'&gender='+data.gender+'&city='+data.city+'&phone='+data.phone+'&profile_pic='+data.profile_pic;
    console.log(url)
    await axios

      .post(url, {})
      .then((response) => {
        dispatch({
          type: 'ADD_FAMILY_MEMBER',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: 'ADD_FAMILY_MEMBER_ERROR',
          payload: response.data.data
          
        });
        console.log(error);
      });
  };
};