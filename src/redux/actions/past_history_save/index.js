import axios from 'axios';
export const past_history_save = (data) => {
  return async (dispatch, getState) => {
    var url = 'http://backend.bionische.com/api/patient/past_history?token='+data.token+'&patient_id='+data.patient_id+'&name='+data.name+'&maritial_status='+data.maritial_status+'&no_of_children='+data.no_of_children+"&occupation="+data.occupation+"&education="+data.education+"&social_status="+data.social_status+"&addiction="+data.addiction+"&history_of_contraception="+data.history_of_contraception+"&high_risk_behaviour="+data.high_risk_behaviour+"&present_complaints="+data.present_complaints+"&demanded_blood_transfusion="+data.demanded_blood_transfusion+"&other_medicals="+data.other_medicals+"&past_treatment="+data.past_treatment+"&drug_allergy="+data.drug_allergy+"&surgical_interventin="+data.surgical_interventin+"&oral_contraception="+data.oral_contraception+"&blood_transfusion="+data.blood_transfusion+"&nsaid_intake="+data.nsaid_intake+"&regular_medicine_user="+data.regular_medicine_user+"&menarche="+data.menarche+"&duration_of_period"+data.duration_of_period+"&quantity_of_blood_loss"+data.quantity_of_blood_loss+"&menstural_irregularities="+data.menstural_irregularities+"&date_of_last_menstural="+data.date_of_last_menstural+"&menopause="+data.menopause+"&no_of_pregnancies="+data.no_of_pregnancies+"&outcome_of_pregnancies="+data.outcome_of_pregnancies+"&complications_during_pregnancy="+data.complications_during_pregnancy+"&mode_of_delivery="+data.mode_of_delivery+"&last_child_birth_date="+data.last_child_birth_date+"&past_complaints="+data.past_complaints1+"&diet_lifestyle="+data.diet_lifestyle+"&family_history="+data.family_history+"&psychological_history="+data.psychological_history
    console.log(url) 
    await axios
    .post(url,{})
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: 'PAST_HISTORY_SAVE',
          payload: response.data.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};